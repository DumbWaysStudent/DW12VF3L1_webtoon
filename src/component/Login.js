import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground, TextInput, Dimensions } from 'react-native';

import bgImage from '../../image/bgImage.jpeg';
import Logo from '../../image/Logo.png';

const {widht: WIDTH} = Dimensions.get('window')

class Login extends Component {
  render(){
    return(
      <ImageBackground source={bgImage} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logotext}>
            Login With Your Account
          </Text>
        </View>

        <View>
          <TextInput style={styles.textInput} placeholder={'Email.........' } 
            placeholderTextColor={'rgba(255,255,255,0..7)'} 
            underLineColorAndroid='transparent' />
        </View>
      </ImageBackground>
    )
  }
}

export default Login;

const styles=StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120
  },
  logoContainer: {
    alignItems: 'center'
  },
  logotext: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  textInput: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)'
  }
})