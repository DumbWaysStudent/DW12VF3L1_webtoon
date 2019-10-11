import React, { Component } from 'react';
import { View, Text, Share, Button, YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Icon} from 'native-base';


//Import halaman untuk navigasi
import Home from './src/component/Home';
import Detail from './src/component/Detail';
import DetailEpisode from './src/component/DetailEpisode';
import MyFavorite from './src/component/MyFavorite';
import Profile from './src/component/Profile';


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
    Detail: {
      screen: Detail,
      title: 'Detail Manga',
      navigationOptions: () => ({
        title: "Detail Manga",
        headerTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Icon name="share-alt" style={{ color: '#000', marginRight: 15, }} onPress={() => onShare()} />
        ),
      })
    },
    DetailEpisode: {
      screen: DetailEpisode,
      title: 'Detail Episode Manga',
      navigationOptions: () => ({
        title: "Detail Manga",
        headerTintColor: 'grey',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
          <Icon name="share-alt" style={{ color: '#000', marginRight: 15, }} onPress={() => onShare()} />
        ),
      })
    },
    MyFavorite: {
      screen: MyFavorite,
      navigationOptions: { header: null }
    },
    Profile: {
      screen: Profile,
      title: 'Profile',
      navigationOptions: ({navigation}) => ({
        title: "Profile",
        headerTintColor: 'grey',
        headerTitleStyle: {
          fontFamily: 'bold',
        }, 
        headerRight: (
          <Icon name="ios-checkmark" style={{ color: '#000', marginRight: 15, fontWeight: 'bold' }} onPress={() => navigation.navigate('EditProfile')} />
        ),
      })
    },
    
  },
  {
    initialRouteName: 'Login'
  }
)

export default createAppContainer(signIn);

console.disableYellowBox=true