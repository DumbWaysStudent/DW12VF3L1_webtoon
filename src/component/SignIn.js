import React, {Component} from 'react';
import {Text, Form, Item, Input, Button, Icon} from 'native-base';
import {View, ImageBackground, Image} from 'react-native';

import bgImage from '../../image/bgImage.jpeg';
import Logo from '../../image/Logo.png';

export default class pass extends Component {
  constructor() {
    super();
    this.state = {
      icon: 'eye-off',
      status: true,
      buttonDisabled: true,
      email: '',
    };
  }

  changeIcon = () => {
    this.setState({
      status: !this.state.status
    })
  };

  emailValidator = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == true) {
      this.setState({
        email,
        buttonDisabled: false,
      });
    } else {
      this.setState({
        email,
        buttonDisabled: true,
      });
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={{ width: null, height: null, justifyContent: 'center', alignContent: 'center', flex: 1}}>

        <View style={styles.container}>

          <View style={styles.containerTitle}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.titleText}>Login with your account WEBTOON</Text>
          </View>

          <Form style={styles.formInput}>

            <Item style={styles.pastContainer}>
              <Input placeholder="Email........" onChangeText={email => this.emailValidator(email)} placeholderTextColor="#dddddd" />
            </Item>
 
            <Item style={styles.pastContainer}>
              <Input secureTextEntry={this.state.status} placeholder="Password......." placeholderTextColor="#dddddd" style={styles.textInput} />
              <Icon name={this.state.status ? "eye" : "eye-off"} onPress={() => this.changeIcon()} style={{marginRight: 10, color: "#ffffff"}} />
            </Item>

          </Form>

          <Button success block disabled={this.state.buttonDisabled} style={styles.botton}>
            <Text>Login</Text>
          </Button>

        </View>

      </ImageBackground>
      
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120
  },
  containerTitle: {
    alignItems: 'center',
  },
  titleText: {
    color: '#000',
    marginTop: 20,
    marginBottom: 25,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    textTransform: 'uppercase'
  },
  pastContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    marginRight: 15,
    marginTop: 10
  },
  formInput: {
    marginRight: 15,
  },
  botton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 25,
  },
};