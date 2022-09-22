import { TThemeButton } from './button';
import { TThemeCheckbox } from './checkbox';
import { TThemeMetrics } from './metrics';
import { TThemeInput } from './input';
import { TThemeRadio } from './radio';
import { TThemeDropdown } from './dropdown';
import { TThemeText } from './text';
import { TThemeImage } from './image';
import { TThemeModal } from './modal';
import { TThemeSystem } from './system';

export type ITheme = {
  metrics?: TThemeMetrics;
  button?: {
    primary?: TThemeButton;
    flat?: TThemeButton;
    secondary?: TThemeButton;
    badge?: TThemeButton;
    icon?: TThemeButton;
  };
  image?: TThemeImage;
  input?: TThemeInput;
  text?: TThemeText;
  selectors?: {
    checkbox?: TThemeCheckbox;
    radio?: TThemeRadio;
  };
  dropdown?: TThemeDropdown;
  modal?: TThemeModal;
  system?: TThemeSystem;
};
