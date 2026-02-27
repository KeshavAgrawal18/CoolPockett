type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  label?: string;
  options: Option[];
  placeholder?: string;
  error?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
};
