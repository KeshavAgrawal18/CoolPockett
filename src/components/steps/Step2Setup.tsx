import React, { useState } from "react";
import { useWizard } from "../../context/WizardContext";
import { CardSelect } from "../ui/CardSelect/CardSelect";
import type { AccountType, ProductGoal } from "../../types/wizard";

export const Step2Setup: React.FC = () => {
  const { state } = useWizard();

  const [accountType, setAccountType] = useState<AccountType | null>(
    state.setup.accountType || null,
  );

  const [goal, setGoal] = useState<ProductGoal | null>(
    state.setup.productGoal || null,
  );

  return (
    <div>
      <CardSelect
        label="Account Type"
        value={accountType}
        onChange={setAccountType}
        options={[
          {
            label: "Individual",
            value: "individual",
          },
          {
            label: "Business",
            value: "business",
          },
        ]}
      />

      <CardSelect
        label="Product Goal"
        value={goal}
        onChange={setGoal}
        options={[
          { label: "Spend", value: "spend" },
          { label: "Save", value: "save" },
          { label: "Invest", value: "invest" },
        ]}
      />
    </div>
  );
};
