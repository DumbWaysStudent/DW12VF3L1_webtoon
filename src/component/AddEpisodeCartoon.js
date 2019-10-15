import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Image, TextInput} from 'react-native';
import { Container, Header, View, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';

import HeaderApp from '../headerfooter/HeaderApp';
import FooterApp from '../headerfooter/FooterApp';

const data = [
  {
    imageUrl: "https://dimg06.c-ctrip.com/images/35020r000000h70iz89D1_Z_1000_0.jpg?proc=source/trip;namelogo/d_40",
    title: "1. cover.png",
  },
  {
    imageUrl: "https://66.media.tumblr.com/f2cb364c38d9dbad43e5c3d81e65ecca/tumblr_p6ijnytPjr1rj5k7ko1_1280.png",
    title: "2. introduction.png",
  }
]

export default class Favourite extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };
  }

  render(){
    return(
      <Container>

        <Content>

          <View style={{ marginHorizontal: 5, marginTop: 15}}>
            <Text style={{fontSize: 24}}>Title</Text>
            <TextInput placeholder="Title Here......." style={{borderWidth: 2}} />
          </View>

          <View style={{marginTop: 15}}>
            <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {title : rowData.title, url : rowData.imageUrl})}>
                        <Image source={{ uri: rowData.imageUrl }} style={{marginHorizontal: 5, padding: 0, width: 100, height: 100, marginVertical: 5}} />
                    </TouchableOpacity>

                    <View>
                      <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 18}}>
                        {rowData.title}
                      </Text>
                      <View>
                        <Button danger>
                          <Text>Delete</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>

          <View style={{marginHorizontal: 5, marginTop: 15}}>
            <Button onPress={() => this.props.navigation.navigate('AddEpisode')}>
              <Text style={{fontSize: 14, marginLeft: 120}}>+ Image</Text>
            </Button>
          </View>
        </Content>

      </Container>
    )
  }
}
