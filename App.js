import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/screens/navigation";
import EmailSentScreen from "./src/screens/authScreens/smailSentScreen";
import SplashScreen from "./src/screens/authScreens/splashScreen";

// import TabsAdvancedExample from "./src/screens/tab";
// import SplashScreen from "./src/screens/authScreens/splashScreen";
// import ChangePasswordScreen from "./src/screens/authScreens/changePasswordScreen";
// import PasswordRecoveryScreen from "./src/screens/authScreens/passwordRecoveryScreen";
// import RegistrationScreen from "./src/screens/authScreens/registrationScreen";
// import LoginScreen from "./src/screens/authScreens/loginScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
        {/* <EmailSentScreen/> */}
        {/* <SplashScreen/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white"
  }
});
