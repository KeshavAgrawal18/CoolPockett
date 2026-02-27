import React from "react";
import { useWizard } from "../../context/WizardContext";
import { Step1Basics } from "../steps/Step1Basics";
import { Step2Setup } from "../steps/Step2Setup";
import { Step3Details } from "../steps/Step3Details";
import { Step4Review } from "../steps/Step4Review";
import "./wizard.css";
import ProgressDots from "./ProgressDots";
import { Button } from "../ui/Button/Button";

const Wizard: React.FC = () => {
  const { state, next, back } = useWizard();
  const isLast = state.step === 4;

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Step1Basics />;
      case 2:
        return <Step2Setup />;
      case 3:
        return <Step3Details />;
      case 4:
        return <Step4Review />;
      default:
        return null;
    }
  };

  return (
    <div className="wizard-root">
      <div className="wizard-header">
        <h2>Account basics</h2>
        <div className="wizard-divider" />
        <ProgressDots step={state.step} total={4} />
      </div>

      <h3>CoolPockett</h3>
      <p>Let's get started</p>
      {renderStep()}

      <div className="wizard-divider" />

      <div className="wizard-footer">Step {state.step} of 4</div>

      <div className="wizard-actions">
        {state.step > 1 && (
          <Button onClick={back} variant="secondary">
            Back
          </Button>
        )}

        <Button
          onClick={state.step < 4 ? next : () => {}}
          type={isLast ? "submit" : "button"}
        >
          {isLast ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Wizard;
