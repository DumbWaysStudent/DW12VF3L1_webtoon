import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import { Container, Header, View, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';

import HeaderApp from '../headerfooter/HeaderApp';
import FooterApp from '../headerfooter/FooterApp';

const data = [
  {
    imageUrl: "https://id.bookmyshow.com/blog-hiburan/wp-content/uploads/2019/08/Shinchan.jpg",
    title: "Crayon Shinchan",
    favourite: "100+ Fafourite"
  },
  {
    imageUrl: "https://vignette.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045",
    title: "Powerpuff Girls",
    favourite: "90 Fafourite"
  },
  {
    imageUrl: "https://cdn.jitunews.com/dynamic/thumb/2018/07/shanks_c4ca4238a0b923820dcc509a6f75849b_630x420_thumb.jpg?w=630",
    title: "Shanks",
    favourite: "80 Fafourite"
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
        <HeaderApp />

        <Content>
          <View style={{alignItems: 'center'}}>
            <Text style={{textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>Your Favourite</Text>
          </View>

          <View>
            <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                return (
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailCartoon', {title : rowData.title, url : rowData.imageUrl})}>
                        <Image source={{ uri: rowData.imageUrl }} style={{marginHorizontal: 5, padding: 0, width: 100, height: 100, marginVertical: 5}} />
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 18}}>
                        {rowData.title}
                      </Text>
                      <Text>{rowData.favourite}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </Content>

        <FooterApp test={this.props.navigation.navigate}/>

      </Container>
    )
  }
}
