import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import {COLORS} from '../theme/theme';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  focused: boolean;
}

const TabBarBackground = () => (
  <BlurView overlayColor="" blurAmount={20} style={styles.blurViewStyles} />
);

const HomeIcon: React.FC<TabIconProps> = ({focused}) => (
  <CustomIcon
    name="home"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const CartIcon: React.FC<TabIconProps> = ({focused}) => (
  <CustomIcon
    name="cart"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const FavoriteIcon: React.FC<TabIconProps> = ({focused}) => (
  <CustomIcon
    name="like"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const HistoryIcon: React.FC<TabIconProps> = ({focused}) => (
  <CustomIcon
    name="bell"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: TabBarBackground,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: HomeIcon}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarIcon: CartIcon}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{tabBarIcon: FavoriteIcon}}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{tabBarIcon: HistoryIcon}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    position: 'absolute',
    elevation: 0,
  },
  blurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
