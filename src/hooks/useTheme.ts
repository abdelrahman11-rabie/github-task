import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getTheme, ThemeConfig } from '../constants/theme';

export const useTheme = (): ThemeConfig => {
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  return getTheme(themeMode);
};
