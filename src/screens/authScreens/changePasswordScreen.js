import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text } from "native-base";
import { WHITE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import { LARGE } from "../../font/font";
import firebase from 'react-native-firebase';
class ChangePasswordScreen extends Component {
  state = {
    password: "",
    code: null,
    confirmPassword: "",
    isPasswordValid: true,
    isConfirmPasswordValid: true
  };

  passwordValidation = text => {
    if (text.length < 5) {
      this.setState({ isPasswordValid: false });
      this.setState({ password: text });
    } else {
      this.setState({ isPasswordValid: true });
      this.setState({ password: text });
    }
  };

  confirmPasswordValidation = text => {
    if (text.length < 5) {
      this.setState({ isConfirmPasswordValid: false });
      this.setState({ confirmPassword: text });
    } else {
      this.setState({ isConfirmPasswordValid: true });
      this.setState({ confirmPassword: text });
    }
  };


  _handleUpdatePassword = () =>{
    if (
      this.state.password != "" &&
      this.state.confirmPassword != "" &&
      this.state.isPasswordValid === true &&
      this.state.isConfirmPasswordValid === true &&
      this.state.password === this.state.confirmPassword
    ) {
        
      this.props.navigation.navigate("TabScreens");
    } else {
      Alert.alert("fields are missing/both password doesn't match");
    }
  }

  render() {
    return (
      <View style={styles.Container}>
        <View
          style={{ alignItems: "center", justifyContent: "center", height: 40 }}
        >
          <Text style={{ fontSize: LARGE, alignSelf: "center" }}>
            Change Password
          </Text>
        </View>
        <View style={{ height: 15 }} />
        <View style={{ height: 50 }}>
          <CustomTextInput
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={text => this.passwordValidation(text)}
          />
          {this.state.isPasswordValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Password must be atleast 5 char long
            </Text>
          )}
        </View>

        <View style={{ height: 25 }} />
        <View style={{ height: 50 }}>
          <CustomTextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={text => this.confirmPasswordValidation(text)}
          />
          {this.state.isConfirmPasswordValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Password must be atleast 5 char long
            </Text>
          )}
        </View>

        <View style={{ height: 30 }}></View>
        <CustomButton
          color={WHITE}
          backgroundColor={"#3ACDE1"}
          Text={"Change Password"}
          onPress={() => {
            this._handleUpdatePassword();
          }}
        />
      </View>
    );
  }
}

export default ChangePasswordScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
