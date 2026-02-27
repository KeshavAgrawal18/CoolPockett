import React from "react";
import Wizard from "./components/wizard/Wizard";
import { WizardProvider } from "./context/WizardContext";

const App: React.FC = () => {
  return (
    <WizardProvider>
      <Wizard />
    </WizardProvider>
  );
};

export default App;
