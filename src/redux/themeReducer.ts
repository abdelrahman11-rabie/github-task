import { TOGGLE_THEME, SET_THEME } from './actionTypes';
import { ThemeActionTypes } from './themeActions';

export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

// Theme Reducer
const themeReducer = (
  state = initialState,
  action: ThemeActionTypes,
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
