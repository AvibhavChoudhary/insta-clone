export type Error = {
  show: boolean;
  message: string;
};

export type InputProps = {
  placeholder?: string;
  onChangeText: (e: any) => void;
  value: string;
  errorMessage?: string;
  showError?: boolean;
};
