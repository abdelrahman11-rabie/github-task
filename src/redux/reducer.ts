import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from './actionTypes';
import { RepoActionTypes } from './actions';

export interface RepoState {
  loading: boolean;
  data: any | null;
  error: string | null;
}


const initialState: RepoState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
const repoReducer = (
  state = initialState,
  action: RepoActionTypes,
): RepoState => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repoReducer;
