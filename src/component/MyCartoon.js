import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import { Container, Header, View, Item, Input, Icon, Button, Text, Content, Footer, FooterTab, Fab } from 'native-base';

import HeaderApp from '../headerfooter/HeaderApp';
import FooterApp from '../headerfooter/FooterApp';

const data = [
  {
    imageUrl: "http://4.bp.blogspot.com/-y1PaxhLhjiU/Vbe5D3dJKAI/AAAAAAAABn4/iZd6ZXwyqM4/s1600/abu-nawas-panah-pembawa-rejeki.png",
    title: "Abu Nawas",
    episodes: "10 Episodes"
  },
  {
    imageUrl: "https://i.ytimg.com/vi/9opl2Re7nYg/hqdefault.jpg",
    title: "Alladdin",
    episodes: "20 Episodes"
  },
  {
    imageUrl: "https://shop.line-scdn.net/themeshop/v1/products/b7/c4/aa/b7c4aadd-b055-443c-ab90-37bf9ea237ed/87/WEBSTORE/icon_198x278.png?__=20161019",
    title: "Chibi Maruko Chan",
    episodes: "40 Episodes"
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

          <View>
            <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditCartoon', {title : rowData.title})}>
                        <Image source={{ uri: rowData.imageUrl }} style={{marginHorizontal: 5, padding: 0, width: 100, height: 100, marginVertical: 5}} />
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        </Content>

        <Fab
            style={{ backgroundColor: '#16a085' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddCartoon') }>
            <Icon type="FontAwesome" name="plus" />
        </Fab>

      </Container>
    )
  }
}
