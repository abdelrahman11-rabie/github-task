import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Explore from '../index';
import repoReducer from '../../../redux/reducer';
import themeReducer from '../../../redux/themeReducer';

// Mock the Dropdown component
jest.mock('react-native-element-dropdown', () => ({
  Dropdown: 'Dropdown',
}));

const createMockStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    repos: repoReducer,
    theme: themeReducer,
  });
  
  return createStore(rootReducer, initialState);
};

describe('Explore Screen', () => {
  it('should render screen title', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    expect(getByText('Explore Repos')).toBeTruthy();
  });

  it('should show loading indicator when loading', () => {
    const store = createMockStore({
      repos: { loading: true, data: null, error: null },
    });
    
    const { getByTestId } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should display error message when error occurs', () => {
    const errorMessage = 'Failed to fetch repositories';
    const store = createMockStore({
      repos: { loading: false, data: null, error: errorMessage },
    });
    
    const { getByText } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
  });

  it('should render dropdown with correct label', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    expect(getByText('View :')).toBeTruthy();
    expect(getByText('Top')).toBeTruthy();
  });

  it('should render repository list when data is available', async () => {
    const mockData = {
      items: [
        {
          id: 1,
          name: 'test-repo-1',
          description: 'Test repository 1',
          html_url: 'https://github.com/test/repo1',
          stargazers_count: 100,
          forks_count: 50,
          language: 'JavaScript',
          updated_at: '2024-01-01T00:00:00Z',
          owner: { login: 'testuser', avatar_url: '' },
        },
      ],
    };
    
    const store = createMockStore({
      repos: { loading: false, data: mockData, error: null },
    });
    
    const { getByText } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    await waitFor(() => {
      expect(getByText('test-repo-1')).toBeTruthy();
    });
  });

  it('should not show loading or error when data is loaded successfully', () => {
    const mockData = {
      items: [
        {
          id: 1,
          name: 'test-repo',
          description: 'Test',
          html_url: 'https://github.com/test/repo',
          stargazers_count: 10,
          forks_count: 5,
          language: 'JavaScript',
          updated_at: '2024-01-01T00:00:00Z',
          owner: { login: 'testuser', avatar_url: '' },
        },
      ],
    };
    
    const store = createMockStore({
      repos: { loading: false, data: mockData, error: null },
    });
    
    const { queryByTestId, queryByText } = render(
      <Provider store={store}>
        <Explore />
      </Provider>
    );
    
    expect(queryByTestId('activity-indicator')).toBeNull();
    expect(queryByText(/Error:/)).toBeNull();
  });
});
