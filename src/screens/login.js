import React , { useContext } from 'react'
import { SafeAreaView , Image , View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Display from '../context/display_context'
import Inputs from '../components/login_page/inputs'

export default props => {

    const { display:{ Styles } } = useContext(Display)

    return (
        <SafeAreaView style={Styles.LoginPage.bkground}>
            <View style={Styles.LoginPage.cont_bkground}>
                <Image source={require('../assets/images/img_bkground.jpg')} style={Styles.LoginPage.img_bkground}></Image>
                <LinearGradient
                        style={Styles.LoginPage.img_bkground_mask}
                        colors={['rgba(255, 255, 255, 0)', 'rgba(19, 5, 37, 1)']}
                ></LinearGradient>
            </View>
            <View style={Styles.LoginPage.cont_inputs}>
                <Inputs></Inputs>
            </View>
        </SafeAreaView>
    )
}

