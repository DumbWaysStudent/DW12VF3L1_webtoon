import React, {Component} from 'react';
import {StyleSheet, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content, View, Text} from 'native-base';

const data=[
  {
    url: 'https://cdn.jitunews.com/dynamic/images/2019/02/dragon_3350c2ecb5f099c1154cd03280801be3.jpg?w=800',
    title: 'Episode 3'
  },
  {
    url: 'http://pm1.narvii.com/6314/8261fba37a680c66c10960a2ad32c7f69077fb59_00.jpg',
    title: 'Episode 2'
  },
  {
    url: 'https://image.tmdb.org/t/p/original/nXGqW273rCDmIsmCRl28t8HXmjl.jpg',
    title: 'Episode 1'
  },
]

export default class Detail extends Component{
  constructor(){
    super();
    this.state={
      data:data
    }
  }

  render(){
    return(
      <Container style={styles.container}>
        <Content>
          <View>
            <Image source={{uri : this.props.navigation.getParam('url')}} style={{height: 250, width : "100%"}}/>
            {console.log(typeof(this.props.navigation.getParam('url')))}
          </View>

          <View>
            <FlatList data={this.state.data} renderItem={({ item: rowData }) => {
              return (
                <View style={{flexDirection: 'row'}}>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', {title : rowData.title, url : rowData.url})}>
                    <Image source={{ uri: rowData.url }} style={styles.imgEpisode} />
                  </TouchableOpacity>

                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {rowData.title}
                    </Text>

                  </View>

                </View>
              );
            }}
            keyExtractor={(item, index) => index} />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  imgEpisode: {
    padding: 0,
    width: 90,
    height: 90,
    marginTop: 5,
    marginHorizontal: 5
  }
})
