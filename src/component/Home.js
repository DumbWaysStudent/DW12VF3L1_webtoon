//This is an example code for Bottom Navigation//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import all the basic component we have used

// import { Container, Header, Item, Input, Icon, Button, Row } from 'native-base';


import { SearchBar, Card, Button } from 'react-native-elements';
import Slideshow from 'react-native-image-slider-show';

 const data = [
  {
    imageUrl: "https://static.bandainamcoent.eu/high/one-piece/one-piece-thousand-storms/03-news/1-opts_first-anniversary.jpg",
    title: "something"
  },
  {
    imageUrl: "https://onepiecetheories.com/wp-content/uploads/2018/11/one-piece-chapter-923-luffy-vs-kaido-1200x675.jpg",
    title: "something two"
  },
  {
    imageUrl: "http://onepiece-treasurecruise.com/en/wp-content/uploads/c2019.png",
    title: "something three"
  },
  {
    imageUrl: "https://cdn0-production-images-kly.akamaized.net/ragzA1mweyuc2D3otwdNmiPH7ss=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2879389/original/097927800_1565594145-preview-one-piece-episode-897-0-700x394.jpg",
    title: "something four"
  },
  {
    imageUrl: "https://cdn0-production-images-kly.akamaized.net/L_7k--iSV1H32mO9TnVGNCMqaGc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1377253/original/076093700_1476779536-One_Piece.jpg",
    title: "something five"
  },
  {
    imageUrl: "https://cdn.sindonews.net/dyn/620/content/2018/05/01/158/1302151/topi-jerami-dapat-tambahan-kru-baru-di-one-piece-chapter-903-PQJ.jpg",
    title: "something six"
  }
]
 
export default class Home extends Component {

    //SLIDER IMAGE
    constructor(props) {
        super(props);
     
        this.state = {
          position: 1,
          interval: null,
          dataSource: [
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: 'https://cdn.sindonews.net/dyn/620/content/2018/05/01/158/1302151/topi-jerami-dapat-tambahan-kru-baru-di-one-piece-chapter-903-PQJ.jpg',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: 'https://cdn0-production-images-kly.akamaized.net/L_7k--iSV1H32mO9TnVGNCMqaGc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1377253/original/076093700_1476779536-One_Piece.jpg',
            }, {
              title: 'Title 3',
              caption: 'Caption 3',
              url: 'https://cdn0-production-images-kly.akamaized.net/ragzA1mweyuc2D3otwdNmiPH7ss=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2879389/original/097927800_1565594145-preview-one-piece-episode-897-0-700x394.jpg',
            },
          ],

          data: data //mengambil data dari variabel konstan
        };
    }

    addProductToCart = () => {
        Alert.alert('Success', 'The product has been added to your cart')
    }
     
    componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
    }
     
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search })
    }

  //Home Screen to show in Home Option
  render() {

    const { search } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ff6b81'}}>
        
        {/* Search */}
        <View>
          <SearchBar placeholder="Search here......." onChangeText={this.updateSearch} value={search} placeholderTextColor={"#FFFFFF"} 
                containerStyle={{backgroundColor: '#dfe4ea', borderBottomWidth: null, height: 50}} inputContainerStyle={{ backgroundColor: '#dfe4ea' }} />
        </View>
        {/* Akhir Seaarch */}
        <ScrollView>
          {/* Slider */}
          <View style={styles.slider}>
            <Card>
              <Slideshow dataSource={this.state.dataSource} position={this.state.position} onPositionChanged={position => this.setState({ position })} />
            </Card>  
          </View> 
          {/* Akhir Slider */}
        
          <Card>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#ff6b81', fontSize: 20, fontWeight: 'bold' }}>LIST FAVOURITE MANGATOON</Text>
            </View>
            <View>
              <FlatList horizontal data={this.state.data} renderItem={({ item: rowData }) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {title : rowData.title, url : rowData.url})}>
                        <Card title={null} 
                          image={{ uri: rowData.imageUrl }} containerStyle={{ padding: 0, width: 190, height: 190 }} >
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                              {rowData.title}
                            </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
            </View>
            
          </Card>

          <Card>
            <View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{color: '#ff6b81', fontSize: 24, fontWeight: 'bold'}}>ALL MANGA</Text>
              </View>
              <View>
                <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                    return (
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                          <Card title={null} image={{ uri: rowData.imageUrl }} containerStyle={{ padding: 0, width: 150, height: 150 }} />
                        </TouchableOpacity>
                        
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{ marginBottom: 10, fontSize: 14, textTransform: 'capitalize', fontWeight: "bold" }}>
                            {rowData.title}
                          </Text>
                          <Button title="Favourite" />
                        </View>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index}
                />
              </View>
            </View>
          </Card>
        </ScrollView>
        
        <View style={styles.footer}> 
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="th-large" style={{fontSize: 40}} />
              <Text styles={{fontWeight: 'bold'}}>For You</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('MyFavorite')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="star" style={{fontSize: 40}}/>
              <Text>Favorite</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="user" style={{fontSize: 40}}/>
              <Text>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  card:{
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
 
    elevation: 9,
    },
    title:{
        fontSize:18,
        flex:1,
        color:"#778899"
      },
      count:{
        fontSize:18,
        flex:1,
        color:"#B0C4DE"
      },
  footer: {
    height: 70,
    marginHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});