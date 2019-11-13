import React, { Component } from 'react';
import {View, Text ,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'native-base';
import { WHITE, PRIMRY_COLOR } from '../../../theme/colors';

class DrawerButton extends Component {
    state = {  }
    
    render() { 
       
        return ( 
        <TouchableOpacity onPress={this.props.onButtonPress? () => this.props.onButtonPress(): () =>false} style={[Styles.dButton, {backgroundColor: this.props.title===this.props.selected?PRIMRY_COLOR: WHITE}]}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", marginLeft: 20}}>
                <Icon style={[ Styles.btnIcon,{color: this.props.title===this.props.selected?WHITE: PRIMRY_COLOR}]} name={this.props.icon?this.props.icon:"home"} type="FontAwesome5"/>
                <Text style={[Styles.btnText, {color: this.props.title===this.props.selected?WHITE: PRIMRY_COLOR}]}>{this.props.title?this.props.title:"home"}</Text>
            </View>
        </TouchableOpacity>
         );
    }
}
 
export default DrawerButton;


const Styles = StyleSheet.create({
    dButton: {
        width: "98%", 
        alignSelf: "center",
        height: 50, 
        borderRadius:10
    }, 
    btnText: {
        fontSize: 18, 
        marginLeft: 10
    }, 
    btnIcon: {
         fontSize: 18
    }
})