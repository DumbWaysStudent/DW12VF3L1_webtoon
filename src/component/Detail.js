import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';

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

export default class Detail extends Component{
    constructor(){
        super();
        this.state ={
            data:data
        }
    }
    render(){
        return(
            <View>
                <ScrollView>
                    <View>
                        <Card image={{uri:this.props.navigation.getParam('url')}} imageStyle={{height:200}} containerStyle={{height:200}}>
                            {/* {console.log( this.props.navigation.getParam('title'), this.props.navigation.getParam('url') )} */}
                        </Card>
                    </View>

                
                    <View>
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
                            }}
                            keyExtractor={(item, index) => index} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}