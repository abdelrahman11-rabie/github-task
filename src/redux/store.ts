import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import repoReducer, { RepoState } from './reducer';
import themeReducer, { ThemeState } from './themeReducer';

export interface RootState {
  repos: RepoState;
  theme: ThemeState;
}

const rootReducer = combineReducers({
  repos: repoReducer,
  theme: themeReducer,
});

// Create store with thunk middleware
// @ts-ignore - Redux thunk typing issue
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
