import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

export default class MyMangaToonAdd extends Component{

    constructor(){  
        super();
        this.state={
            data: [
                {
                    imageUrl: "https://static.bandainamcoent.eu/high/one-piece/one-piece-thousand-storms/03-news/1-opts_first-anniversary.jpg",
                    title: "Episode 1"
                },
                {
                    imageUrl: "https://onepiecetheories.com/wp-content/uploads/2018/11/one-piece-chapter-923-luffy-vs-kaido-1200x675.jpg",
                    title: "Episode 2"
                },
                {
                    imageUrl: "http://onepiece-treasurecruise.com/en/wp-content/uploads/c2019.png",
                    title: "Episode 3"
                }
            ]
        }
    }

    render(){
        return(
            <View style={{backgroundColor: '#ff6b81', flex: 1}}>
                <View>
                    <Text style={{marginLeft: 15, marginTop: 15, textTransform: 'uppercase'}}>Title</Text>
                    <TextInput placeholder="Edit here....." style={styles.textAddComic} />
                </View>

                <View>
                    <Text style={{ textTransform: 'uppercase', marginLeft: 15, marginVertical: 15, fontWeight: 'bold' }} > Episode </Text>
                    <ScrollView>
                        <FlatList 
                            data={this.state.data}
                            renderItem={({item}) => {
                                return(
                                    <View style={{marginLeft: 15, flexDirection: 'row'}}>
                                        <Image source={{uri: item.imageUrl }} style={{width: 100, height: 100, marginVertical: 15}} />
                                        <View style={{ justifyContent: 'center', marginLeft: 15}} >
                                            <Text style={{ marginBottom: 10, fontSize: 14, textTransform: 'capitalize', fontWeight: "bold" }}>
                                                {item.title}
                                            </Text>
                                            <Text>17 Agustus 1945</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
                
                <TouchableOpacity>
                    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey'}}> 
                        <Text style={{marginHorizontal: 15, marginTop: 20, height: 40}}>+ Add Episode</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textAddComic: {
        borderWidth: 2,
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 20,
        paddingLeft: 15
    }
})