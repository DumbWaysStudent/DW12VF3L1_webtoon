import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Splash from './src/component/Splash';
import SignIn from './src/component/SignIn';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  render(){
    const { isLoading } = this.state

    if(isLoading) {
      return(
        <Splash />
      )
    }

    return(
      <SignIn />
    )
  }

  onLoading= () => {

    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000)
  }

  componentDidMount(){
    this.onLoading()
  }
}

export default App;