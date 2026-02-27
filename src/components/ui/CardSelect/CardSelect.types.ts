export interface CardOption<T> {
  label: string;
  value: T;
  description?: string;
}

export interface CardSelectProps<T> {
  options: CardOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  label?: string;
  error?: string;
}
