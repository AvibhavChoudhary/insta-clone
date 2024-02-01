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

export type BottomSheetProps = {
  showModal: boolean;
  toggleModal: () => void;
};

export type SheetItemType = {
  name: string;
  iconName: () => React.JSX.Element;
};
