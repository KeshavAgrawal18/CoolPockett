import React, { createContext, useContext, useEffect, useState } from "react";
import type { WizardState } from "../types/wizard";

interface WizardContextType {
  state: WizardState;
  next: () => void;
  back: () => void;
  updateBasics: (data: Partial<WizardState["basics"]>) => void;
  updateSetup: (data: Partial<WizardState["setup"]>) => void;
  updateDetails: (data: Partial<WizardState["details"]>) => void;
  reset: () => void;
}

const STORAGE_KEY = "coolpockett-state";

const defaultState: WizardState = {
  step: 1,
  basics: {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
  },
  setup: {
    accountType: "",
    productGoal: "",
  },
  details: {},
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

function loadState(): WizardState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultState;
  } catch {
    return defaultState;
  }
}

export const WizardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<WizardState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const next = () =>
    setState((prev) => ({
      ...prev,
      step: Math.min(prev.step + 1, 4),
    }));

  const back = () =>
    setState((prev) => ({
      ...prev,
      step: Math.max(prev.step - 1, 1),
    }));

  const updateBasics = (data: Partial<WizardState["basics"]>) =>
    setState((prev) => ({
      ...prev,
      basics: { ...prev.basics, ...data },
    }));

  const updateSetup = (data: Partial<WizardState["setup"]>) =>
    setState((prev) => ({
      ...prev,
      setup: { ...prev.setup, ...data },
    }));

  const updateDetails = (data: Partial<WizardState["details"]>) =>
    setState((prev) => ({
      ...prev,
      details: { ...prev.details, ...data },
    }));

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(defaultState);
  };

  return (
    <WizardContext.Provider
      value={{
        state,
        next,
        back,
        updateBasics,
        updateSetup,
        updateDetails,
        reset,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export function useWizard(): WizardContextType {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error("useWizard must be used inside WizardProvider");
  }

  return context;
}
