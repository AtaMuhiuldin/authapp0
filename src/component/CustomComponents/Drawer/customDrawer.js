import React, { Component } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import DrawerButton from './drawerButton';
import {NavigationActions, StackActions} from 'react-navigation'
import firebase from 'react-native-firebase';
// import { PRIMRY_COLOR } from '../../../theme/colors';



class CustomDrawer extends Component {
    state = { 
        selectedTab: 'HomeScreen'
     }
     setTabName= async (tabName) =>{
        await this.setState({selectedTab: tabName})
     }
    render() { 
        return ( 

        <ScrollView style={Styles.container}>
          
            <View style={{width: "100%", height: 200, alignItems: "center", justifyContent:"center"}}>
                {/* <View>
                <Image style={{width: 150, height: 150}} source={require('../../../images/profile.png')}/>
                <Text style={{alignSelf:"center", fontSize: 20, color: PRIMRY_COLOR}}>{this.props.currentUser.fName+" "+this.props.currentUser.lName}</Text>
                </View> */}
             

            </View>

            
           <DrawerButton onButtonPress={() => {
               this.setTabName("HomeScreen"); 
               this.props.navigation.navigate("HomeScreen");
               this.props.navigation.closeDrawer();
                }} 
                selected={this.state.selectedTab} title="HomeScreen" icon="home" onPress={() => true}/>

        
         
          <DrawerButton onButtonPress={() => {
               this.setTabName("logout"); 
               firebase.auth().signOut()
                .then(signedOut => {
                    console.log("user signed out");
                    console.log(signedOut);
                    let logoutAction = StackActions.reset({
                        index: 0, 
                        actions: [NavigationActions.navigate({routeName: "TabScreens"})]
                    })
                    this.props.navigation.dispatch(logoutAction);
                    this.props.navigation.closeDrawer();
                }).catch(err => {
                    console.log("CATCH ERROR SIGNOUT")
                    console.log(err);
                })
              
                }} 
                selected={this.state.selectedTab} title="logout" icon="sign-out-alt" onPress={() => true}/>
         
         
 
         

        </ScrollView> 
        );
    }
}
 

export default CustomDrawer;



const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    }
})
