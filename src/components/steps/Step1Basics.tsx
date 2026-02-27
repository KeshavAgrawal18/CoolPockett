import React, { useState, useCallback } from "react";

import { useWizard } from "../../context/WizardContext";

import { Input } from "../ui/Input/Input";
import type { Basics } from "../../types/wizard";
import { Select } from "../ui/Select/Select";
import { PasswordInput } from "../ui/PasswordInput/PasswordInput";

type Errors = Partial<Record<keyof Basics, string>>;

const countryOptions = [
  { label: "India", value: "IN" },
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "UK" },
  { label: "Other", value: "OTHER" },
];

export const Step1Basics: React.FC = () => {
  const { state } = useWizard();

  const [values, setValues] = useState<Basics>(state.basics);

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = useCallback(
    <K extends keyof Basics>(field: K, value: Basics[K]) => {
      setValues((prev) => ({
        ...prev,
        [field]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    },
    [],
  );

  return (
    <div className="step">
      <Input
        label="Full Name"
        value={values.fullName}
        error={errors.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />

      <Input
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <Input
        label="Phone"
        value={values.phone}
        error={errors.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <Select
        label="Country"
        value={values.country}
        error={errors.country}
        options={countryOptions}
        onChange={(value) => handleChange("country", value)}
      />

      <PasswordInput
        label="Password"
        value={values.password}
        error={errors.password}
        onChange={(value) => handleChange("password", value)}
      />
    </div>
  );
};
