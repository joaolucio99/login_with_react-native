import React , { useContext } from 'react'
import { SafeAreaView , Image , View , Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Display from '../context/display_context'
import Inputs from '../components/login_page/inputs'
import Button from '../components/login_page/button'

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
                <Button></Button>
            </View>
            <View style={Styles.LoginPage.cont_fgt_psw}>
                <Text style={Styles.LoginPage.fgt_psw_txt}>Esqueceu seu login ou senha?{"\n"}</Text>
                <Text style={Styles.LoginPage.fgt_psw_txt2}>Clique</Text>
                <Text style={Styles.LoginPage.fgt_psw_under_txt}>aqui</Text>
            </View>
        </SafeAreaView>
    )
}

