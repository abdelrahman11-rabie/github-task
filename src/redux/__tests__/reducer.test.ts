import repoReducer, { RepoState } from '../reducer';
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from '../actionTypes';
import { RepoActionTypes } from '../actions';

describe('repoReducer', () => {
  const initialState: RepoState = {
    loading: false,
    data: null,
    error: null,
  };

  it('should return the initial state', () => {
    const result = repoReducer(undefined, {} as RepoActionTypes);
    expect(result).toEqual(initialState);
  });

  it('should handle FETCH_REPOS_REQUEST', () => {
    const action: RepoActionTypes = { type: FETCH_REPOS_REQUEST };
    const result = repoReducer(initialState, action);
    
    expect(result.loading).toBe(true);
    expect(result.error).toBe(null);
  });

  it('should handle FETCH_REPOS_SUCCESS', () => {
    const mockData = {
      items: [
        { id: 1, name: 'test-repo', description: 'Test repository' },
      ],
    };
    const action: RepoActionTypes = {
      type: FETCH_REPOS_SUCCESS,
      payload: mockData,
    };
    
    const loadingState = { ...initialState, loading: true };
    const result = repoReducer(loadingState, action);
    
    expect(result.loading).toBe(false);
    expect(result.data).toEqual(mockData);
    expect(result.error).toBe(null);
  });

  it('should handle FETCH_REPOS_FAILURE', () => {
    const errorMessage = 'Failed to fetch repositories';
    const action: RepoActionTypes = {
      type: FETCH_REPOS_FAILURE,
      payload: errorMessage,
    };
    
    const loadingState = { ...initialState, loading: true };
    const result = repoReducer(loadingState, action);
    
    expect(result.loading).toBe(false);
    expect(result.data).toBe(null);
    expect(result.error).toBe(errorMessage);
  });

  it('should clear error when making a new request', () => {
    const errorState = {
      loading: false,
      data: null,
      error: 'Previous error',
    };
    const action: RepoActionTypes = { type: FETCH_REPOS_REQUEST };
    const result = repoReducer(errorState, action);
    
    expect(result.error).toBe(null);
  });

  it('should not mutate the original state', () => {
    const action: RepoActionTypes = { type: FETCH_REPOS_REQUEST };
    const stateBefore = { ...initialState };
    repoReducer(initialState, action);
    expect(initialState).toEqual(stateBefore);
  });
});
