//This is an example code for React Native Floating Action Button//
import React, { Component } from 'react';
//import react in our code.
 
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, FlatList, Card, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
//import all the components we are going to use.

 
export default class MyMangatoon extends Component {

    constructor(props){
        super(props);

        this.state = {
            data:[
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
                }
            ]
        }
        
    }


 
  render() {
    return (
      <View style={{flex : 1}}>

        <View style={{flex : 1, backgroundColor : '#ff6b81'}}>
            <FlatList 
            data={this.state.data}
            renderItem={({item, index}) => {
               return(
                <View style={{backgroundColor : '#ff6b81', marginHorizontal: 10, marginVertical: 10}}>
                    <Image source={{uri: item.imageUrl }} style={{width: 100, height: 100}} />
                    <Text> {item.title} </Text>
                </View>
               )
            }}

            />
        </View>
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyMangatoonAdd') } style={{borderWidth : 1,  borderRadius: 100, borderColor : 'black', borderStyle : 'solid', position : 'absolute', bottom : 10, right : 20, height : 50, width : 50, justifyContent : 'center', alignItems : 'center', backgroundColor: '#d35400'}}>
                <Icon name="plus" style={{ fontSize: 30, width: 50, height: 50, textAlign: 'center', marginTop: 20,}} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
});