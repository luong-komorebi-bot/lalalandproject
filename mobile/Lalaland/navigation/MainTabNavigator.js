import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SliderScreen from "../screens/SliderScreen.js"
import ProductListingScreen from '../screens/ProductListingScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import NotificationScreen from '../screens/NotificationScreen'
import TabBarIconCenter from '../components/TabBarIconCenter';
import Colors from '../constants/Colors';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    ProductListings: ProductListingScreen,
    ProductDetail: ProductDetailScreen
  },


);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },}
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    ProductDetail: ProductDetailScreen,
    ProductListing: ProductListingScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIconCenter focused={focused} name={Platform.OS === 'ios' ? 'ios-rocket' : 'md-rocket'} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },}
  
};


LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} 
    />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },}
};

SettingsStack.path = '';

const ProductListingStack = createStackNavigator(
  {
   ProductListing: ProductListingScreen, 
   ProductDetail: ProductDetailScreen,
  },
  config
)

ProductListingStack.navigationOptions = {
  tabBarLabel: 'Latest',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} 
    />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },}
}

const NotificationStack = createStackNavigator(
  {
   Notification: NotificationScreen, 
 
  },
  config
)

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'} 
    />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },}
}



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProductListingStack,
  LinksStack,
  NotificationStack,
  SettingsStack,
},

);

tabNavigator.path = '';

export default tabNavigator;
