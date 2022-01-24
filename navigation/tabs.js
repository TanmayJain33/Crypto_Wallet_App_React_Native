import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MarketScreen from '../screens/MarketScreen';
import {COLORS} from '../constants/theme';
import TabIcon from '../components/TabIcon';
import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio Screen"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                label="Portfolio"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trade Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                label="Trade"
                isTrade={true}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market Screen"
        component={MarketScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.profile} label="Profile" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
