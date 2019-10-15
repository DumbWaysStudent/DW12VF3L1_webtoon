import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Footer, FooterTab, Text, Button, Icon} from 'native-base';

export default class FooterApp extends Component{
  render(){
    return(
      <Footer>
        <FooterTab style={{backgroundColor: '#16a085'}}>
            <Button vertical active onPress={() => this.props.test('Home')}>
              <Icon name="apps" />
              <Text>For You</Text>
            </Button>

            <Button vertical onPress={() => this.props.test('Favourite')}>
              <Icon name="star" />
              <Text>Favourite</Text>
            </Button>

            <Button vertical onPress={() => this.props.test('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
        </FooterTab>
      </Footer>
    )
  }
}
