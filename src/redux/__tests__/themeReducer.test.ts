import themeReducer, { ThemeState } from '../themeReducer';
import { TOGGLE_THEME, SET_THEME } from '../actionTypes';
import { ThemeActionTypes } from '../themeActions';

describe('themeReducer', () => {
  const initialState: ThemeState = {
    theme: 'light',
  };

  it('should return the initial state', () => {
    const result = themeReducer(undefined, {} as ThemeActionTypes);
    expect(result).toEqual(initialState);
  });

  it('should handle TOGGLE_THEME from light to dark', () => {
    const action: ThemeActionTypes = { type: TOGGLE_THEME };
    const result = themeReducer(initialState, action);
    expect(result.theme).toBe('dark');
  });

  it('should handle TOGGLE_THEME from dark to light', () => {
    const darkState: ThemeState = { theme: 'dark' };
    const action: ThemeActionTypes = { type: TOGGLE_THEME };
    const result = themeReducer(darkState, action);
    expect(result.theme).toBe('light');
  });

  it('should handle SET_THEME to dark', () => {
    const action: ThemeActionTypes = { type: SET_THEME, payload: 'dark' };
    const result = themeReducer(initialState, action);
    expect(result.theme).toBe('dark');
  });

  it('should handle SET_THEME to light', () => {
    const darkState: ThemeState = { theme: 'dark' };
    const action: ThemeActionTypes = { type: SET_THEME, payload: 'light' };
    const result = themeReducer(darkState, action);
    expect(result.theme).toBe('light');
  });

  it('should not mutate the original state', () => {
    const action: ThemeActionTypes = { type: TOGGLE_THEME };
    const stateBefore = { ...initialState };
    themeReducer(initialState, action);
    expect(initialState).toEqual(stateBefore);
  });
});
