import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text } from "native-base";
import { WHITE } from "../../theme/colors";
import CustomTextInput from "../../component/CustomComponents/TextInput/CuustomTextInput";
import CustomButton from "../../component/CustomComponents/Button/CustomerButton";
import firebase from 'react-native-firebase';
class RegistrationScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isFirstNameValid: true,
    isLastNameValid: true,
    isEmailValid: true,
    isPasswordValid: true, 
    processing: false, 
    error: ""
  };


  resetForm = () => {
    this.setState({firstName: "", lastName: "", email: "", password:"", isFirstNameValid: true, isLastNameValid: true, isEmailValid: true, isPasswordValid: true})
  }

  firstNameValidation = async text => {
    if (text === "") {
     await  this.setState({ isFirstNameValid: false, firstName: text });
    } else {
     await this.setState({ isFirstNameValid: true, firstName: text });
    }
  };
  lastNameValidation = async text => {
    if (text === "") {
     await  this.setState({ isLastNameValid: false, lastName: text });
    } else {
     await this.setState({ isLastNameValid: true, lastName: text });
    }
  };
  emailValidation = async text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
    await  this.setState({ isEmailValid: false });
    await  this.setState({ email: text });
    } else {
    await  this.setState({ isEmailValid: true });
    await  this.setState({ email: text });
    }
  };
  passwordValidation = async text => {
    if (text.length < 5) {
     await this.setState({ isPasswordValid: false });
     await this.setState({ password: text });
    } else {
    await this.setState({ isPasswordValid: true });
    await this.setState({ password: text });
    }
  };
  validateForm = async () => {
    await this.firstNameValidation(this.state.firstName);
    await this.lastNameValidation(this.state.lastName);
     await this.emailValidation(this.state.email);
     await this.passwordValidation(this.state.password);
     if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.isFirstNameValid === true &&
      this.state.isLastNameValid === true &&
      this.state.isEmailValid === true &&
      this.state.isPasswordValid === true
    ) {
        return true;
    }else{
      return false;
    }
  }

  _handleSignupUser = ( ) => {
    this.setState({processing: true});
    this.validateForm()
      .then(validated => {
        if(validated){
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(cUser =>{
              console.log("SignUpUser");
              console.log(cUser);
              this._handleCreateUser();
          }).catch(err => {
            console.log("CATCH - signup");
            console.log(err);
            this.setState({error: err.message});
            this.setState({processing: false});

          })
      } else {
        this.setState({processing: false});
      }
      })
    
     
  }

  _handleCreateUser = () => {
    firebase.database().ref("Users/").push({
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      email: this.state.email
    }).then(data => {
      console.log(data);
      this.setState({processing: false})
      this.resetForm();
      this.setState({error: ""})
      this.props.changeTab(1);
      Alert.alert("Account Created Successfylly");
    }).catch(err => {
      console.log(err);
      this.setState({error: err.message});
      // Alert.alert("Error user");
      this.setState({processing: false});
    })
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={{ height: 15 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
            value={this.state.firstName}
            placeholder="First Name"
            onChangeText={text => this.firstNameValidation(text)}
          />
          {this.state.isFirstNameValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              First Name is required
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
          value={this.state.lastName}
            placeholder="Last Name"
            onChangeText={text => this.lastNameValidation(text)}
          />
          {this.state.isLastNameValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red" }}>
              Last Name is required
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
          value={this.state.email}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => this.emailValidation(text)}
          />
          {this.state.isEmailValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red", marginTop: 4 }}>
              Email is not valid
            </Text>
          )}
        </View>

        <View style={{ height: 25 }}></View>
        <View style={{ height: 50 }}>
          <CustomTextInput
          value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.passwordValidation(text)}
          />
          {this.state.isPasswordValid ? (
            <Text />
          ) : (
            <Text style={{ marginLeft: 15, color: "red", marginTop: 4 }}>
              Password must be atleast 4 char long
            </Text>
          )}
        </View>

        <View style={{ height: 30 }}></View>
        <CustomButton
          processing={this.state.processing}
          color={WHITE}
          backgroundColor={"#3ACDE1"}
          Text={"Register"}

          onPress={() => {
            this._handleSignupUser()
          }}
        />
        <Text style={{color: "red", alignSelf:"center", textAlign:"center"}}>{this.state.error}</Text>
      </View>
    );
  }
}

export default RegistrationScreen;

styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
