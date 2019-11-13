import React, { Component } from "react";
import { Item, Input } from "native-base";
import { WHITE } from "../../../theme/colors";
import { MEDIUM } from "../../../font/font";
class CustomTextInput extends Component {
  state = {};
  render() {
    return (
      <Item
        regular
        style={{
          width: "90%",
          alignSelf: "center",
          borderRadius: 10,
          height: this.props.Inputheight ? this.props.Inputheight : 50,
          backgroundColor: WHITE,
          borderColor: WHITE
        }}
      >
        <Input
          autoCapitalize="none"
          value={this.props.value? this.props.value: null}
          disabled={this.props.disabled ? this.props.disabled : false}
          secureTextEntry={
            this.props.secureTextEntry ? this.props.secureTextEntry : false
          }
          onChangeText={
            this.props.onChangeText ? this.props.onChangeText : text => false
          }
          keyboardType={
            this.props.keyboardType ? this.props.keyboardType : "default"
          }
          placeholder={
            this.props.placeholder ? this.props.placeholder : "Enter"
          }
          style={{ fontSize: MEDIUM }}
          placeholderTextColor="#979797"
        />
      </Item>
    );
  }
}

export default CustomTextInput;
