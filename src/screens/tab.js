import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from "native-base";
import LoginScreen from "./authScreens/loginScreen";
import RegistrationScreen from "./authScreens/registrationScreen";
import firebase from 'react-native-firebase';
export default class TabsAdvancedExample extends Component {

  state={
    unsubscriber: null,
    
      user: null,
      initialPage: 1
    
  }

  // componentDidMount() {
  //   this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user }, () => {
  //       if(this.state.user){
  //         this.props.navigation.navigate("HomeScreen");
  //       }
  //     });

  //   });
  // }

  // componentWillUnmount() {
  //   if (this.unsubscriber) {
  //     this.unsubscriber();
  //   }
  // }

  changeTab = (value) => {
    this.setState({initialPage: value})
  }

  render() {
    return (
      <Container>
        {/* <Header hasTabs style={{ backgroundColor: "white" }} /> */}
        <Tabs page={this.state.initialPage} tabBarUnderlineStyle={{ backgroundColor: "#3ACDE1" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>SIGN IN</Text>
              </TabHeading>
            }
          >
            <LoginScreen changeTab={this.changeTab} navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>SIGN UP</Text>
              </TabHeading>
            }
          >
            <RegistrationScreen changeTab={this.changeTab} navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
