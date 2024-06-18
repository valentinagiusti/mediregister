export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  documentPhoto: string;
};

export interface UserAddModel{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  documentPhoto: string;
}

export type UsersListProps = {
  users: User[];
};

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  documentPhoto: File | null;
}

export interface InputFieldProps {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  touched?: boolean;
}

export interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: 'success' | 'error';
}

export type UserCardProps = {
  user: User;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
};

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  documentPhoto: File | null;
}