import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button, Left, Right, Body, Icon } from "native-base";
import { BLACK, WHITE, PRIMRY_COLOR } from "../../../theme/colors";

export default class CustomHeader extends Component {
  render() {
    return (
     
        <Header style={{ backgroundColor: WHITE }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                name="bars"
                type="FontAwesome5"
                style={{ color: PRIMRY_COLOR }}
              />
            </Button>
          </Left>
          <Body style={{ flex: 4 }} ><Text style={{alignSelf:"center", fontSize: 20}}>{this.props.title? this.props.title:""}</Text></Body>
          <Right style={{ flex: 1 }} />
        </Header>
     
    );
  }
}
