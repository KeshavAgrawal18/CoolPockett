import React, { useState, useCallback } from "react";

import { useWizard } from "../../context/WizardContext";

import { Input } from "../ui/Input/Input";
import { FileUpload } from "../ui/FileUpload/FileUpload";

export const Step3Details: React.FC = () => {
  const { state } = useWizard();

  const isBusiness = state.setup.accountType === "business";

  const country = state.basics.country;

  const [values, setValues] = useState(state.details);

  const [file, setFile] = useState<File | null>(null);

  const handleChange = useCallback((field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return (
    <div className="step">
      {!isBusiness && (
        <>
          <Input
            label="Date of Birth"
            type="date"
            value={values?.individual?.dob || ""}
            onChange={(e) => handleChange("dob", e.target.value)}
          />

          <Input
            label="Address"
            value={values?.individual?.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </>
      )}

      {isBusiness && (
        <>
          <Input
            label="Legal Name"
            value={values?.business?.legalName || ""}
            onChange={(e) => handleChange("legalName", e.target.value)}
          />

          <Input
            label="Role"
            value={values?.business?.role || ""}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </>
      )}

      {country === "IN" && (
        <Input
          label="PAN"
          value={values?.countryDetails?.pan || ""}
          onChange={(e) => handleChange("pan", e.target.value)}
        />
      )}

      {country === "US" && (
        <Input
          label="SSN Last 4"
          value={values?.countryDetails?.ssnLast4 || ""}
          onChange={(e) => handleChange("ssnLast4", e.target.value)}
        />
      )}

      <FileUpload label="Upload document" file={file} onFileSelect={setFile} />
    </div>
  );
};
