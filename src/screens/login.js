import React , { useContext } from 'react'
import { SafeAreaView, Text , View } from 'react-native'
import Display from '../context/display_context'

export default props => {

    const { display:{ Styles } } = useContext(Display)

    return (
        <SafeAreaView>
            <View style={Styles.LoginPage.box}>
                <Text>Teste</Text>
            </View>
        </SafeAreaView>
    )
}

