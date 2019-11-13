import React, { Component } from 'react';
import { View, Text, Icon } from 'native-base';
import { PRIMRY_COLOR, WHITE } from '../../theme/colors';
import CustomButton from '../../component/CustomComponents/Button/CustomerButton';

class EmailSentScreen extends Component {
    state = {  }
    render() { 
        return ( 
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Icon name="envelope"  style={{color: PRIMRY_COLOR, fontSize: 200}} type="FontAwesome5"/>
            <Text style={{padding: 30, textAlign: "center"}}> We have Sent you an email with a password reset link please follow that link to reset password </Text>
            <CustomButton onPress={() => {
                this.props.navigation.navigate("TabScreens");
            }} color={WHITE} backgroundColor={PRIMRY_COLOR} Text="Done"/>
        </View>
         );
    }
}
 
export default EmailSentScreen;