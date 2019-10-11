import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';

const data = [
    {
        id: 1,
        imageUrl: "https://mangaku.in/manga/img/2019/10/77f6bab84867270d2bce2be4-03.jpg",
    },
    {
        id: 2,
        imageUrl: "https://mangaku.in/manga/img/2019/10/9c580d786cde2bc988c95dd3-01.jpg",
    },
    {
        id: 3,
        imageUrl: "https://1.bp.blogspot.com/-uHIRfkHRnWY/XZc7GowHpAI/AAAAAAAAhTI/80kWfZVYlI4Neovovv9-FDyB89dYpw0KgCLcBGAsYHQ/s1600/01.jpg",
    },
    {
        id: 4,
        imageUrl: "https://2.bp.blogspot.com/--GoYRdOBphM/XZc7GsBLcqI/AAAAAAAAhTA/fWf4X3X2aP0_YEbRWqr_-nUjQHB-66OEACLcBGAsYHQ/s1600/02.jpg",
    },
    {
        id: 5,
        imageUrl: "https://2.bp.blogspot.com/-oqHxrJHnks8/XZc7HkuDQeI/AAAAAAAAhTM/fvqQlXVwuZk-x-_-fSDyyY_2ff45B3sYQCLcBGAsYHQ/s1600/03.jpg",
    },
    {
        id: 6,
        imageUrl: "https://4.bp.blogspot.com/-cHmLm7JtrI4/XZc7Huw7zsI/AAAAAAAAhTQ/FtivSvTsqFApjrxDzQR76M_aFo6vBUWWACLcBGAsYHQ/s1600/04.jpg",
    },
    {
        id: 7,
        imageUrl: "https://2.bp.blogspot.com/-_-MVNivapNs/XZc7H07A_hI/AAAAAAAAhTU/ZKTCpTRmw5YfoWM6umFzkDrbNepkOTv0ACLcBGAsYHQ/s1600/05.jpg",
    },
    {
        id: 8,
        imageUrl: "https://2.bp.blogspot.com/-mmoqiYEcDVg/XZc7I0wfraI/AAAAAAAAhTc/J7BaeT9mylYHtmfJYlLTgUAaWihz6g65ACLcBGAsYHQ/s1600/08.jpg",
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
                <ScrollView>
                    <View>
                        <Card image={{uri:this.props.navigation.getParam('url')}} imageStyle={{height:200}} containerStyle={{height:200}}>
                            {/* {console.log( this.props.navigation.getParam('title'), this.props.navigation.getParam('url') )} */}
                        </Card>
                    </View>

                
                    <View>
                        <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                            return (
                               <Card containerStyle={{height: 300}} image={{uri: rowData.imageUrl}} imageStyle={{height: 400}}>
                               </Card>
                               
                            );
                            }}
                            keyExtractor={(item, index) => index} />
                    </View>
                </ScrollView>
        )
    }
}