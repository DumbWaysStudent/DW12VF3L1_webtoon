import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container, View, Text, Content, Icon, Button} from 'native-base';

import FooterApp from '../headerfooter/FooterApp'

export default class Favourite extends Component{
  render(){
    return(
      <Container>
        <Content>
          <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={{uri: 'https://images.bewakoof.com/original/shinchan-music-sweatshirt-women-s-printed-crewneck-sweatshirts-aw18-213686-1553761960.jpg'}} style={{height: 200, width: 200, borderRadius: 100}} />
            <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 24}}>Irwanto Wibowo</Text>
          </View>
        </Content>

        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
            <Button onPress={() => this.props.navigation.navigate('MyCartoon')}>
              <Text>My Webtoon Create</Text>
            </Button>

            <Button style={{marginTop: 10}} onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Logout</Text>
            </Button>

          </View>
        </Content>

        <FooterApp test={this.props.navigation.navigate}/>
      </Container>

    )
  }
}
