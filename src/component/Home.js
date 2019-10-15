import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import { Container, Header, View, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

import HeaderApp from '../headerfooter/HeaderApp';
import FooterApp from '../headerfooter/FooterApp';

export default class Home extends Component{
  //image untuk slider
  constructor(props){
    super(props);

    this.state={
      position: 1,
      interval: null,
      dataSlider: [
        {
          url: 'https://cdn.sindonews.net/dyn/620/content/2018/05/01/158/1302151/topi-jerami-dapat-tambahan-kru-baru-di-one-piece-chapter-903-PQJ.jpg',
        }, {
          url: 'https://cdn0-production-images-kly.akamaized.net/L_7k--iSV1H32mO9TnVGNCMqaGc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1377253/original/076093700_1476779536-One_Piece.jpg',
        }, {
          url: 'https://cdn0-production-images-kly.akamaized.net/ragzA1mweyuc2D3otwdNmiPH7ss=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2879389/original/097927800_1565594145-preview-one-piece-episode-897-0-700x394.jpg',
        },
      ],

      dataFavorite: [
        {
          //id: 1,
          imageUrl: "https://static.bandainamcoent.eu/high/one-piece/one-piece-thousand-storms/03-news/1-opts_first-anniversary.jpg",
          title: "something"
        },
        {
          //id: 2,
          imageUrl: "https://onepiecetheories.com/wp-content/uploads/2018/11/one-piece-chapter-923-luffy-vs-kaido-1200x675.jpg",
          title: "something two"
        },
        {
          //id: 3,
          imageUrl: "http://onepiece-treasurecruise.com/en/wp-content/uploads/c2019.png",
          title: "something three"
        },
        {
          //id: 3,
          imageUrl: "https://cdn0-production-images-kly.akamaized.net/ragzA1mweyuc2D3otwdNmiPH7ss=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2879389/original/097927800_1565594145-preview-one-piece-episode-897-0-700x394.jpg",
          title: "something four"
        },
        {
          //id: 4,
          imageUrl: "https://cdn0-production-images-kly.akamaized.net/L_7k--iSV1H32mO9TnVGNCMqaGc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1377253/original/076093700_1476779536-One_Piece.jpg",
          title: "something five"
        },
        {
          //id: 5,
          imageUrl: "https://cdn.sindonews.net/dyn/620/content/2018/05/01/158/1302151/topi-jerami-dapat-tambahan-kru-baru-di-one-piece-chapter-903-PQJ.jpg",
          title: "something six"
        }
      ]
    }
  }

  //_keyExtractor = (item, index) => item.id

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSlider.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render(){
    return(
      <Container>
        <HeaderApp />

        <Content style={styles.slider}>
          <Slideshow dataSource={this.state.dataSlider} position={this.state.position} onPositionChanged={position => this.setState({ position })} />

          <Content style={{marginTop: 10}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textManga}>LIST FAVOURITE MANGATOON</Text>
            </View>
            <View>
              <FlatList horizontal data={this.state.dataFavorite} renderItem={({ item: rowData }) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailCartoon', {title : rowData.title, url : rowData.imageUrl})}>
                          <Image source={{ uri: rowData.imageUrl }} style={{marginHorizontal: 5, padding: 0, width: 190, height: 190, marginVertical: 5}} />
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                              {rowData.title}
                            </Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              keyExtractor={(item, index) => index}
            />
            </View>
          </Content>

          <Content>
            <View style={styles.allManga}>
              <Text style={styles.textManga}>List All Manga</Text>
            </View>

            <View>
              <FlatList data={this.state.dataFavorite} renderItem={({ item: rowData }) => {
                  return (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailCartoon', {title : rowData.title, url : rowData.imageUrl})}>
                          <Image source={{ uri: rowData.imageUrl }} style={{marginHorizontal: 5, padding: 0, width: 190, height: 190, marginVertical: 5}} />
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: 18}}>
                          {rowData.title}
                        </Text>
                        <Button>
                          <Icon name="add" />
                          <Text>Favourite</Text>
                        </Button>
                      </View>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
          </Content>

        </Content>

        <FooterApp test={this.props.navigation.navigate}/>

      </Container>
    )
  }
}

const styles=StyleSheet.create({
  slider: {
    marginTop: 10
  },
  allManga: {
    alignItems: 'center',
    marginTop: 10,
  },
  textManga: {
    fontSize: 20,
    color: "#000000",
    textTransform: 'uppercase',
  }
})
