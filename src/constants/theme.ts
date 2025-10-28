import { COLORS } from "./colors";

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  card: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  overlay: string;
  disabled: string;
  placeholder: string;
  headerBg: string;
  textPrimary: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  isDark: boolean;
}

export const lightTheme: ThemeConfig = {
  isDark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FAFCFE',
    primary: '#2B1090',
    secondary: '#68DDBA',
    text: '#000000',
    textSecondary: '#858D95',
    border: '#E5E5E5',
    card: '#FFFFFF',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
    info: '#007AFF',
    overlay: '#D9D4EB',
    disabled: '#C7C7CC',
    placeholder: COLORS.blueOverlay,
    headerBg: '#FFFFFF',
    textPrimary: 'black',
  },
};

export const darkTheme: ThemeConfig = {
  isDark: true,
  colors: {
    background: '#000000',
    surface: '#1C1C1E',
    primary: '#5E5CE6',
    secondary: '#68DDBA',
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    border: '#38383A',
    card: '#1C1C1E',
    error: '#FF453A',
    success: '#32D74B',
    warning: '#FF9F0A',
    info: '#0A84FF',
    overlay: '#2C2C2E',
    disabled: '#48484A',
    placeholder: '#243C3B',
    headerBg: '#161C21',
    textPrimary: 'white',
  },
};

export const getTheme = (mode: 'light' | 'dark'): ThemeConfig => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

export const getThemedImage = (mode: 'light' | 'dark', imageName: string) => {
  const images = {
    light: {
      logo: require('../assets/images/mainLogo.png'),
    },
    dark: {
      logo: require('../assets/images/darkLogo.png'),
    },
  };

  return images[mode][imageName as keyof typeof images.light];
};
