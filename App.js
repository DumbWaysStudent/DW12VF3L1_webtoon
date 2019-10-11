import React, { Component } from 'react';
import { View, Text, Share, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Icon} from 'native-base';


//Import halaman untuk navigasi
import Home from './src/component/Home';


import Splash from './src/component/Splash';
import Login from './src/component/Login';

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Let\'s try Mangatoon',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



const signIn = createStackNavigator(
  {
    Login: {
      screen: Login,
      hederStyle: 'none',
      navigationOptions: { header: null }
    },
    Home: {
      screen: Home,
      headerStyle: 'For You',
      navigationOptions: { header: null }
    },
    
  },
  {
    initialRouteName: 'Login'
  }
)

export default createAppContainer(signIn);