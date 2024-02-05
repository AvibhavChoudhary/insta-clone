import {UserDataType} from './userData';

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
  postData: UserDataType;
};

export type SheetItemType = {
  name: string;
  iconName: () => React.JSX.Element;
};

export type UploadPostProps = {
  imageUri: string;
  toggleButtons: () => void;
  isEdit?: boolean;
  caption?: string;
  onShare: () => void;
};

export type StoryType = {
  time: number;
  image: any;
};

export type PostType = {
  time: string;
  date: string;
  images: any[];
  caption: string;
  like: number;
};

export type DeleteDialogProps = {
  showAlert: boolean;
  closeDialog: () => void;
  title: string;
  subTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmButtonText: string;
  cancelButtonText: string;
};

export type ToastProps = {
  toastRef: any;
  title: string;
  description: string;
  variant: 'accent' | 'outline' | 'solid' | undefined;
  action: 'error' | 'warning' | 'success' | 'info' | 'attention' | undefined;
  placement:
    | 'top'
    | 'top right'
    | 'top left'
    | 'bottom'
    | 'bottom left'
    | 'bottom right';
};

export type ChatItemType = {
  id: number;
  name: string;
  message: string;
  time: number;
  avatar: any;
  unread: boolean;
};
