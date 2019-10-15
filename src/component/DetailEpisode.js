import React, {Component} from 'react';
import {FlatList, StyleSheet, Image, ScrollView} from 'react-native';
import {View, Text, Container, Content} from 'native-base';

const data=[
  {
        id: 1,
        url: "https://mangaku.in/manga/img/2019/10/77f6bab84867270d2bce2be4-03.jpg",
    },
    {
        id: 2,
        url: "https://mangaku.in/manga/img/2019/10/9c580d786cde2bc988c95dd3-01.jpg",
    },
    {
        id: 3,
        url: "https://1.bp.blogspot.com/-uHIRfkHRnWY/XZc7GowHpAI/AAAAAAAAhTI/80kWfZVYlI4Neovovv9-FDyB89dYpw0KgCLcBGAsYHQ/s1600/01.jpg",
    },
    {
        id: 4,
        url: "https://2.bp.blogspot.com/--GoYRdOBphM/XZc7GsBLcqI/AAAAAAAAhTA/fWf4X3X2aP0_YEbRWqr_-nUjQHB-66OEACLcBGAsYHQ/s1600/02.jpg",
    },
    {
        id: 5,
        url: "https://2.bp.blogspot.com/-oqHxrJHnks8/XZc7HkuDQeI/AAAAAAAAhTM/fvqQlXVwuZk-x-_-fSDyyY_2ff45B3sYQCLcBGAsYHQ/s1600/03.jpg",
    },
    {
        id: 6,
        url: "https://4.bp.blogspot.com/-cHmLm7JtrI4/XZc7Huw7zsI/AAAAAAAAhTQ/FtivSvTsqFApjrxDzQR76M_aFo6vBUWWACLcBGAsYHQ/s1600/04.jpg",
    },
    {
        id: 7,
        url: "https://2.bp.blogspot.com/-_-MVNivapNs/XZc7H07A_hI/AAAAAAAAhTU/ZKTCpTRmw5YfoWM6umFzkDrbNepkOTv0ACLcBGAsYHQ/s1600/05.jpg",
    },
    {
        id: 8,
        url: "https://2.bp.blogspot.com/-mmoqiYEcDVg/XZc7I0wfraI/AAAAAAAAhTc/J7BaeT9mylYHtmfJYlLTgUAaWihz6g65ACLcBGAsYHQ/s1600/08.jpg",
    }
]

export default class DetailEpisode extends Component{

  constructor(){
    super();
    this.state={
      data:data
    }
  }

  render(){
    return(
      <Container>
        <Content>
          <View>
            <Image source={{uri:this.props.navigation.getParam('url')}} style={{height:250}} />
                            {/* {console.log( this.props.navigation.getParam('title'), this.props.navigation.getParam('url') )} */}
          </View>

          <View style={{marginTop: 5}}>
              <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
                  return (
                    <Image source={{uri: rowData.url}} style={{height: 570}} />
                  );
                }}
                keyExtractor={(item, index) => index} />
          </View>
        </Content>
      </Container>
    )
  }
}
