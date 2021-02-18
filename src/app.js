import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/login'

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="login"
                headerMode='false'
            >
                <Stack.Screen
                    name='login'
                    component={ Login }
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
