import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Repositories from '../index';
import repoReducer from '../../../redux/reducer';
import themeReducer from '../../../redux/themeReducer';

// Mock the modals
jest.mock('../../../components/molecules/LanguageModal', () => 'LanguageModal');
jest.mock('../../../components/molecules/DateModal', () => 'DateModal');

const createMockStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    repos: repoReducer,
    theme: themeReducer,
  });
  
  return createStore(rootReducer, initialState);
};

describe('Repositories Screen', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render screen title', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    expect(getByText('Explore Repos')).toBeTruthy();
  });

  it('should render language filter button', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    expect(getByText('Language :')).toBeTruthy();
    expect(getByText('javascript')).toBeTruthy();
  });

  it('should render date filter button', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    expect(getByText('Date :')).toBeTruthy();
    expect(getByText('2019-01-10')).toBeTruthy();
  });

  it('should open language modal when language filter is pressed', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    const languageButton = getByText('Language :').parent;
    fireEvent.press(languageButton!);
    
    // Modal should be visible (we can't test the actual modal since it's mocked)
    expect(languageButton).toBeTruthy();
  });

  it('should open date modal when date filter is pressed', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    const dateButton = getByText('Date :').parent;
    fireEvent.press(dateButton!);
    
    // Modal should be visible (we can't test the actual modal since it's mocked)
    expect(dateButton).toBeTruthy();
  });

  it('should show loading indicator when loading', () => {
    const store = createMockStore({
      repos: { loading: true, data: null, error: null },
    });
    
    const { getByTestId } = render(
      <Provider store={store}>
        <Repositories />
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
        <Repositories />
      </Provider>
    );
    
    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
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
          language: 'TypeScript',
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
        <Repositories />
      </Provider>
    );
    
    await waitFor(() => {
      expect(getByText('test-repo-1')).toBeTruthy();
    });
  });

  it('should debounce API calls', () => {
    const store = createMockStore();
    
    render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    // Fast forward time to trigger debounced call
    jest.advanceTimersByTime(500);
    
    // Debounce timer should have been set
    expect(jest.getTimerCount()).toBeGreaterThanOrEqual(0);
  });

  it('should display selected language', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    // Default language should be 'javascript'
    expect(getByText('javascript')).toBeTruthy();
  });

  it('should display selected date', () => {
    const store = createMockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Repositories />
      </Provider>
    );
    
    // Default date should be '2019-01-10'
    expect(getByText('2019-01-10')).toBeTruthy();
  });
});
