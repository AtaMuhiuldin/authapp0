import React, { Component } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { WHITE } from "../../theme/colors";
import firebase from 'react-native-firebase';
import {NavigationActions, StackActions} from 'react-navigation';
class SplashScreen extends Component {
  componentDidMount() {
  
  }

  state={
    unsubscriber: null,
    
      user: null,
    
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user }, () => {
        if(this.state.user){
          setTimeout(() => {
            let navAction = StackActions.reset({
              index: 0, 
              actions: [NavigationActions.navigate({ routeName:  "HomeScreen"})]
            })
            this.props.navigation.dispatch(navAction)
          }, 3000);
        }else{
          let navAction = StackActions.reset({
            index: 0, 
            actions: [NavigationActions.navigate({ routeName:"TabScreens"})]
          })
          this.props.navigation.dispatch(navAction)
        }
      });

    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
  render() {
    return (
    
        <View style={styles.Container}>
            <StatusBar backgroundColor="white" barStyle="light-content" />

          <Image
            resizeMode="stretch"
            source={require("../../images/splash.jpg")}
            style={{ alignSelf: "center", height: 150, width: 200 }}
          />
        </View>
    
    );
  }
}
export default SplashScreen;

styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
