import React, {Component} from 'react';
import {Share} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';

import Home from './src/component/Home';
import DetailCartoon from './src/component/DetailCartoon';
import DetailEpisode from './src/component/DetailEpisode';
import Favourite from './src/component/Favourite';
import Profile from './src/component/Profile';
import ProfileEdit from './src/component/ProfileEdit';
import MyCartoon from './src/component/MyCartoon';
import AddCartoon from './src/component/AddCartoon';
import AddEpisodeCartoon from './src/component/AddEpisodeCartoon';
import EditCartoon from './src/component/EditCartoon';
import EditEpisodeCartoon from './src/component/EditEpisodeCartoon';

import Login from './src/component/Login';
import { from } from 'rxjs';

//this is to share the manga
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
//end of the share code

const login = createStackNavigator(
  {
    Login: {
      screen: Login,
      headerStyle: 'none',
      navigationOptions: {header: null}
    }
  },
  {
    initialRouteName: 'Login',
  }
)

const project = createStackNavigator(
  {
    // Login: {
    //   screen: Login,
    //   headerStyle: 'none',
    //   navigationOptions: {header: null}
    // },
    Home: {
      screen: Home,
      headerStyle: 'For You',
      navigationOptions: {header: null}
    },
    DetailCartoon: {
      screen: DetailCartoon,
      navigationOptions: () => ({
        title: "Detail Manga",
        headerTintColor: '#000',
        headerStyle:{
          backgroundColor: '#16a085'
        },
        headerRight: (
          <Icon type="FontAwesome" name="share-alt" size={45} onPress={() => onShare()} style={{marginRight: 15}} />
        )
      })
    },
    DetailEpisode: {
      screen: DetailEpisode,
      navigationOptions: () => ({
        title: "Detail Episode",
        headerTintColor: '#000',
        headerStyle:{
          backgroundColor: '#16a085'
        },
        headerRight: (
          <Icon type="FontAwesome" name="share-alt" size={45} onPress={() => onShare()} style={{marginRight: 15}} />
        )
      })
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: {header: null}
    },
    Profile: {
      screen: Profile,
      title: 'Profile',
      navigationOptions: ({navigation}) => ({
        title: "Profile",
        headerTintColor: '#00',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="pencil" onPress={() => navigation.navigate('ProfileEdit')} style={{marginRight: 15}} />
        ),
      })
    },
    ProfileEdit: {
      screen: ProfileEdit,
      title: 'Edit Profile',
      navigationOptions: ({navigation}) => ({
        title: "Edit Profile",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="check" onPress={() => navigation.navigate('ProfileEditAction')} style={{marginRight: 15}} />
        ),
      })
    },
    MyCartoon: {
      screen: MyCartoon,
      title: 'My Cartoon',
      navigationOptions: ({navigation}) => ({
        title: "My Cartoon",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        }
      })
    },
    AddCartoon: {
      screen: AddCartoon,
      title: 'Create Webtoon',
      navigationOptions: ({navigation}) => ({
        title: "Create Webtoon",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="check" style={{marginRight: 15}} />
        ),
      })
    },
    AddEpisodeCartoon: {
      screen: AddEpisodeCartoon,
      title: 'Create Episode Webtoon',
      navigationOptions: ({navigation}) => ({
        title: "Create Episode Webtoon",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="check" style={{marginRight: 15}} />
        ),
      })
    },
    EditCartoon: {
      screen: EditCartoon,
      title: 'Edit Webtoon',
      navigationOptions: ({navigation}) => ({
        title: "Edit Webtoon",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="check" style={{marginRight: 15}} />
        ),
      })
    },
    EditEpisodeCartoon: {
      screen: EditEpisodeCartoon,
      title: 'Edit Episode Webtoon',
      navigationOptions: ({navigation}) => ({
        title: "Edit Episode Webtoon",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#16a085'
        },
        headerTitleStyle: {
          fontFamily: 'bold',
        },
        headerRight: (
          <Icon type="FontAwesome" name="check" style={{marginRight: 15}} />
        ),
      })
    }

  },
  {
    initialRouteName: 'Home',
  },
);

const Switch = createSwitchNavigator(
  {
    login: login,
    project: project,
  },
  {
    initialRouteName: 'login',
  }
)

export default createAppContainer(Switch);
