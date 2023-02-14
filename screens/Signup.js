import React, {Component} from "react";
import {Alert, Box, HStack, NativeBaseProvider, Input, Button} from "native-base";
import {Text, StyleSheet, View,StatusBar, KeyboardAvoidingView,Platform,Image, TouchableHighlight} from "react-native";

class Signup extends Component {

    render() {
        ///fetch("https://jsonplaceholder.typicode.com/todos/1");
        return (
            <NativeBaseProvider style={styles.container}>
                <Box style={styles.container}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{backgroundColor:'#fff',flex:1}}>
                        <View width={'100%'} style={{ flexDirection:'row', padding:30}}>
                            <View style={{paddingBottom:4,borderStyle: 'solid', borderBottomWidth:2,borderColor:'#000'}}><Text style={{color:'#000', fontWeight: 'bold', fontSize:20}}>Signup</Text></View>
                            <View style={{paddingBottom: 4, marginLeft:15}} >
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                                    <Text style={{color: 'grey', fontWeight: 'bold', fontSize:20}}>Login</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{flex: 2, alignItems:"flex-end"}}><Image source={require('../assets/logo.png')} style={{resizeMode: 'contain'}} alt="Testing"  width={30} height={30}/></View>
                        </View>
                        <View style={{flex:1, flexDirection:'column',padding:30}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:35}}>Create your account!!</Text>
                                <Text style={{fontSize:20,marginTop:5,marginLeft:4,color:'grey'}}>on StudentApp</Text>
                            </View>
                            <View style={{marginTop:60}}>
                                <Input style={{marginBottom:20}} variant="underlined" size="2xl" placeholder="Full Name" />
                                <Input style={{marginBottom:20}} variant="underlined" size="2xl" placeholder="Email address" />
                                <View style={{marginTop:20}}>
                                    <Input type="password" variant="underlined" style={{marginBottom:20}}  size="2xl" placeholder="Choose a password" />
                                </View>
                            </View>

                            <Button onPress={() => this.props.navigation.navigate('Login')} colorScheme="secondary" style={{width:'100%',marginTop: 25}}>Signup</Button>

                        </View>
                    </KeyboardAvoidingView>

                </Box>
            </NativeBaseProvider>
        )
    }
}

export default Signup;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196F3',
        flex:1,
        paddingTop:50
    },
    content: {

        backgroundColor: '#fff',

    }
})