import React, {Component} from "react";
import {Alert, Box, HStack, NativeBaseProvider} from "native-base";
import {Text} from "react-native";

class Dashboard extends Component {

    render() {
        return (
            <NativeBaseProvider>
                <Box>
                    Hello World!!
                    <Alert>
                        <HStack flexShrink={1} space={2} alignItems="left">
                            <Alert.Icon/>
                            <Text fontWeight="medium">We are getting there </Text>
                        </HStack>
                        <Box>
                            We are happy to announce that we are going live on now ndd
                        </Box>
                    </Alert>
                </Box>
            </NativeBaseProvider>
        )
    }
}

export default Dashboard;