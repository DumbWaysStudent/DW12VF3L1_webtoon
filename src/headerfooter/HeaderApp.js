import React, {Component} from 'react';
import { Header, Item, Input, Icon } from 'native-base';

export default class HeaderApp extends Component{
  render(){
    return(
      <Header searchBar rounded style={{backgroundColor: '#16a085'}}>
        <Item>
          <Icon type="Ionicon" name="ios-search" />
          <Input placeholder="Search......" />
        </Item>
      </Header>
    )
  }
}
