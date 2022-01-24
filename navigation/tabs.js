import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MarketScreen from '../screens/MarketScreen';
import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <Tab.Screen name="Home Screen" component={HomeScreen} />
      <Tab.Screen name="Portfolio Screen" component={PortfolioScreen} />
      <Tab.Screen name="Trade Screen" component={HomeScreen} />
      <Tab.Screen name="Market Screen" component={MarketScreen} />
      <Tab.Screen name="Profile Screen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
