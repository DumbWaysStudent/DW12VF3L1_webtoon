import React, { Component } from 'react';
import {Icon, Container} from 'native-base';

import FooterApp from '../headerfooter/FooterApp';

import Logo from '../../image/shinchan.jpg';

// import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, TextInput
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class EditProfile extends React.Component {
  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View
                    style={[styles.avatar, styles.avatarContainer, {marginBottom: 300}]}>
                    {this.state.avatarSource === null ? (
                    <Image source={Logo} style={styles.image} />
                    ) : (
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                    )}
                    <Icon type="FontAwesome" name="camera" style={{position: 'absolute', right: 0, bottom: 0, marginRight: 20}} />
                </View>
              </TouchableOpacity>
          </View>

          <View>
              <View style={[styles.navProfile]}>
                  <TextInput placeholder="Irwanto Wibowo" style={styles.textEditProfile} />
              </View>
          </View>

          {this.state.videoSource && (
            <Text style={{margin: 8, textAlign: 'center'}}>
              {this.state.videoSource}
            </Text>
          )}
        </View>

        <FooterApp test={this.props.navigation.navigate} />
      </Container>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    navProfile: {
        marginTop: -250,
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
    },
    textEditProfile: {
        borderWidth: 1,
        width: 300,
    }
});