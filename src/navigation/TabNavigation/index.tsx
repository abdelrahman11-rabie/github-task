import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Explore from '../../screens/Explore';
import Repositories from '../../screens/Repositories';
import { COLORS } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { useTheme } from '../../hooks/useTheme';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  const themeConfig = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: themeConfig.colors.headerBg,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#68DDBA',
          width: 75,
          marginLeft: 24,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: fonts.medium,
        },
        tabBarActiveTintColor: themeConfig.isDark
          ? COLORS.primary
          : COLORS.darkBlue,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarItemStyle: {
          width: 120,
        },
      }}
    >
      <Tab.Screen component={Explore} name="Explore" />
      <Tab.Screen component={Repositories} name="Repositories" />
    </Tab.Navigator>
  );
};

export default TabNavigation;
