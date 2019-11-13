import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';
import { Container, Header, Content } from 'native-base'
import CustomHeader from '../component/CustomComponents/Header/CustomHeaderApp';
class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
        <Container>
            <CustomHeader title={"Home"}  navigation={this.props.navigation}/>
            <StatusBar backgroundColor="black" barStyle="light-content" />
           <View style={{ flex: 1, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize: 25}}>Welcom To the Application</Text>

           </View>
        </Container> );
    }
}
 
export default HomeScreen;