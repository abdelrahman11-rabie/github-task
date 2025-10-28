import { TOGGLE_THEME, SET_THEME } from './actionTypes';

// Action interfaces
export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: 'light' | 'dark';
}

export type ThemeActionTypes = ToggleThemeAction | SetThemeAction;

// Action creators
export const toggleTheme = (): ToggleThemeAction => ({
  type: TOGGLE_THEME,
});

export const setTheme = (theme: 'light' | 'dark'): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});
