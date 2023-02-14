import React, {Component} from "react";
import {Alert, Box, HStack, NativeBaseProvider, Center, Image, Button, Container} from "native-base";
import {Text, StyleSheet, View} from "react-native";

class Home extends Component {

    render() {
        return (
            <NativeBaseProvider style={styles.container}>
                <Box style={styles.container}>
                    <Center>
                        <View style={{textAlign: 'center',marginTop:100}}><Text style={{fontSize: 30, color: '#ffff'}}>Welcome</Text></View>
                        <View style={{textAlign: 'center',marginTop:20}}><Text style={{fontSize: 30, color: '#ffff'}}>to StudentApp</Text></View>

                        <Image source={require('../assets/home.png')}  style={{resizeMode: 'contain'}} alt="Testing" width={400} height={400} />

                        <Container style={{width:'100%'}}>
                            <Button onPress={() => this.props.navigation.navigate('Login')} colorScheme="secondary" style={{width:'100%',marginBottom: 5}}>Login</Button>
                            <Button colorScheme="light" style={{width:'100%',marginBottom: 15}}>Signup</Button>
                        </Container>
                    </Center>
                </Box>
            </NativeBaseProvider>
        )
    }
}

export default Home;
 const styles = StyleSheet.create({
     container: {
         backgroundColor: '#2196F3',
         flex: 1,
         flexDirection: 'column'
     }
 })