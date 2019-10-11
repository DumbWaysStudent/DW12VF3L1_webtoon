import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

import Logo from '../../image/orang-tua.jpg';

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image source={Logo} style={styles.image} />
                </View>
                <View style={styles.navProfile}>
                    <View style={styles.create}>
                        <TouchableOpacity>
                            <Text>My Creation Mangatoon</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.logout}>
                        <TouchableOpacity>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    navProfile: {
        marginTop: 25,
        alignItems: 'center'
    },
    create: {
        marginTop: 20,
        backgroundColor: 'grey',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    logout: {
        marginTop: 20,
        backgroundColor: 'grey',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    }
})

