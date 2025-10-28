import { toggleTheme, setTheme } from '../themeActions';
import { TOGGLE_THEME, SET_THEME } from '../actionTypes';

describe('themeActions', () => {
  describe('toggleTheme', () => {
    it('should create an action to toggle theme', () => {
      const expectedAction = {
        type: TOGGLE_THEME,
      };
      expect(toggleTheme()).toEqual(expectedAction);
    });
  });

  describe('setTheme', () => {
    it('should create an action to set theme to dark', () => {
      const expectedAction = {
        type: SET_THEME,
        payload: 'dark',
      };
      expect(setTheme('dark')).toEqual(expectedAction);
    });

    it('should create an action to set theme to light', () => {
      const expectedAction = {
        type: SET_THEME,
        payload: 'light',
      };
      expect(setTheme('light')).toEqual(expectedAction);
    });
  });
});
