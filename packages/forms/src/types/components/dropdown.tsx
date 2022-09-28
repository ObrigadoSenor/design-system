import { IconProps } from '@obrigadosenior/core';
import { InputProps } from './input';

export type DropdownOptionProps = {
  title: string;
  value: string;
  id: string;
  data?: string;
  disabled?: boolean;
  icon?: IconProps;
};

export type DropdownProps = InputProps & {
  options: DropdownOptionProps[];
  onOptionClick: (option: DropdownOptionProps) => void;
  onToggleOpen?: (open: boolean) => void;
};

export type DropdownOptionsProps = {
  options: DropdownProps['options'];
  onOptionsClick: (option: DropdownOptionProps) => void;
  activeOption: DropdownOptionProps | null;
};

export type UseFilterOptions = {
  options: DropdownProps['options'];
};