import { Dispatch } from 'redux';
import { BASE_URL } from '@env';
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from './actionTypes';

// Action interfaces
export interface FetchReposRequestAction {
  type: typeof FETCH_REPOS_REQUEST;
}

export interface FetchReposSuccessAction {
  type: typeof FETCH_REPOS_SUCCESS;
  payload: any;
}

export interface FetchReposFailureAction {
  type: typeof FETCH_REPOS_FAILURE;
  payload: string;
}

export type RepoActionTypes =
  | FetchReposRequestAction
  | FetchReposSuccessAction
  | FetchReposFailureAction;

// Action creators
export const fetchReposRequest = (): FetchReposRequestAction => ({
  type: FETCH_REPOS_REQUEST,
});

export const fetchReposSuccess = (data: any): FetchReposSuccessAction => ({
  type: FETCH_REPOS_SUCCESS,
  payload: data,
});

export const fetchReposFailure = (error: string): FetchReposFailureAction => ({
  type: FETCH_REPOS_FAILURE,
  payload: error,
});

export interface FetchReposParams {
  perPage: string;
  language?: string;
  date?: string;
}

export const fetchRepos = (params: FetchReposParams) => {
  return async (dispatch: Dispatch<RepoActionTypes>) => {
    dispatch(fetchReposRequest());

    try {
      const {
        perPage = 10,
        language = 'javascript',
        date = '2019-01-10',
      } = params;

      const params_obj = new URLSearchParams({
        q: `created:>${date} language:${language}`,
        per_page: perPage.toString(),
        sort: 'stars',
        order: 'desc',
      });

      const queryString = params_obj.toString().replace(/%20/g, '+');
      const url = `${BASE_URL}?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      dispatch(fetchReposSuccess(data));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      dispatch(fetchReposFailure(errorMessage));
    }
  };
};
