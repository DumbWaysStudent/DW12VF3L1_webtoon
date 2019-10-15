import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Image, TextInput} from 'react-native';
import { Container, Header, View, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';

const data = [
  {
    imageUrl: "http://en.chinaculture.org/attachement/jpg/site1/201808/28/5b84b139a310add1c698da45.jpeg",
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
            <Text style={{fontSize: 24}}>Name</Text>
            <TextInput placeholder={this.props.navigation.getParam('title')} style={{borderWidth: 2}} />
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
                      <Text>{rowData.episodes}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>

          <View style={{marginHorizontal: 5, marginTop: 15}}>
            <Button onPress={() => this.props.navigation.navigate('AddEpisodeCartoon')}>
              <Text style={{fontSize: 14, marginLeft: 120}}>+ Image</Text>
            </Button>
          </View>
          <View style={{marginHorizontal: 5, marginTop: 15}}>
            <Button danger>
              <Text style={{fontSize: 14, marginLeft: 100}}>Delete Episode</Text>
            </Button>
          </View>
        </Content>

      </Container>
    )
  }
}
