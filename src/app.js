import React from 'react'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/login'
import { DisplayProvider } from './context/display_context'
import Store from './redux/store/index'

const Stack = createStackNavigator();

export default props => {
    return (
        <Provider store={Store}>
            <DisplayProvider>
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
            </DisplayProvider>
        </Provider>
    )
}
