/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Header from './src/components/molecules/Header';
import TabNavigation from './src/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from './src/redux/themeActions';
import ErrorBoundry from './src/components/organisms/ErrorBoundry';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

function AppContent() {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const theme = colorScheme === 'dark' ? 'dark' : 'light';
    dispatch(setTheme(theme) as any);
  }, [colorScheme, dispatch]);

  return (
    <>
      <ErrorBoundry>
        <NavigationContainer>
          <Header />
          <TabNavigation />
        </NavigationContainer>
      </ErrorBoundry>
    </>
  );
}

export default App;
