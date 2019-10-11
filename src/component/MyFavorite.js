import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchBar, Card, Button } from 'react-native-elements';



const data = [
  {
    imageUrl: "https://i.ytimg.com/vi/mKRxtzVuphs/maxresdefault.jpg",
    title: "Episode 1"
  },
  {
    imageUrl: "https://pm1.narvii.com/6444/12d3490bf9f501a310cecd34a928188b134fc717_hq.jpg",
    title: "Episode 2"
  },
  {
    imageUrl: "https://static.duniaku.net/2016/08/Kaido-Karakter-Terkuat-OP-1.jpg",
    title: "Episode 3"
  },
  {
    imageUrl: "https://scontent-yyz1-1.cdninstagram.com/vp/f9f4f0eb15b831ef0d8e8c6e7fde885e/5E1D9E2B/t51.2885-15/sh0.08/e35/c0.83.667.667a/s640x640/70475711_2658959050802843_1954950965636288821_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=111",
    title: "Episode 4"
  },
  {
    imageUrl: "https://i.ytimg.com/vi/Ya86AsRQVI4/maxresdefault.jpg",
    title: "Episode 5"
  }
]

export default class MyFavorite extends Component{
    constructor(props) {
      super(props);
      this.state ={
        data:data
      }
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search })
    }

    render(){
      const { search } = this.state
      return(
        <View style={{backgroundColor: '#ff6b81', position:'relative'}}>
          <View>
              <SearchBar placeholder="Search here......." onChangeText={this.updateSearch} value={search} placeholderTextColor={"#FFFFFF"} 
              containerStyle={{backgroundColor: '#dfe4ea', borderBottomWidth: null, height: 50}} inputContainerStyle={{ backgroundColor: '#dfe4ea' }} />
          </View>
          <ScrollView>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                  return (
                      <View>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', {title : rowData.title, url : rowData.imageUrl})}>
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
                }
              }
              keyExtractor={(item, index) => index} />
            </View>
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
      )
    }
}

const styles = StyleSheet.create({

  footer: {
    height: 70,
    marginHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});