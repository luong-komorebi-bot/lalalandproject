import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import SliderScreen from "../screens/SliderScreen"
import LoginScreen from "../screens/LoginScreen"
import ProductDetailScreen from '../screens/ProductDetailScreen';
import InterestScreen from '../screens/InterestScreen'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Slider: SliderScreen,
    Login: LoginScreen,
    ProductDetail: ProductDetailScreen,
    Interests: InterestScreen,
  },
  {
    initialRouteName: 'Slider',
  }

  )

);
