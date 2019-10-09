import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logoImage from '../../image/Logo.png';

class Splash extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
      </View>
    )
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1, //biar warnanya penuh
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 250,
  }
})