//This is an example code for Bottom Navigation//
import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import KenalanScreen from './pages/KenalanScreen';
import FavouriteScreen from './pages/FavouriteScreen';
import SignIn from './src/component/SignIn'

//Halaman Login
const Login = createStackNavigator(
    {
        //Definition of navigation from Login Screen
        Login: { screen: SignIn, navigationOptions: {header: null } },
    }
)

//Halaman Home
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen, navigationOptions:{ header: null} },
    Details: { screen: DetailsScreen },
    Kenalan: { screen: KenalanScreen }
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#ff6b81',
      },
      headerTintColor: '#FFFFFF',
      title: 'For You',
      //Header title
    },
  }
);

//Halaman Setting
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
    Kenalan: { screen: KenalanScreen }
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#ff6b81',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);

const KenalanStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#ff6b81',
      },
      headerTintColor: '#FFFFFF',
      title: 'Kenalan',
      //Header title
    },
  }
);

const FavouriteStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#ff6b81',
      },
      headerTintColor: '#FFFFFF',
      title: 'Favourite Screen',
      //Header title
    },
  }
);


const Route = createBottomTabNavigator(
  {
    ForYou: { screen: HomeStack },
    Favourite: { screen: FavouriteStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'ForYou') {
          iconName = `ios-apps${focused ? '' : ''}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : ''}`;
        } else if (routeName === 'Favourite') {
          iconName = `ios-star${focused ? '' : ''}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff6b81',
      inactiveTintColor: '#000',
    },
  }
);
export default createAppContainer(Terminal);