import React , { useContext } from 'react'
import { SafeAreaView , Image , View , Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Display from '../context/display_context'
import Inputs from '../components/login_page/inputs'
import Button from '../components/login_page/button'

export default props => {

    const { display:{ Styles , tablet} } = useContext(Display)

    return (
        <SafeAreaView style={Styles.LoginPage.bkground}>
            <View style={Styles.LoginPage.cont_bkground}>
                <Image source={tablet ? require('../assets/images/img_bkground_tablet.jpg') : require('../assets/images/img_bkground.jpg')} style={Styles.LoginPage.img_bkground}></Image>
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
                <Text style={Styles.LoginPage.fgt_psw_txt}>Esqueceu seu login ou senha?{"\n"}Clique <Text style={tablet ? {textDecorationLine: 'underline' , color:'#9626AC'} : {textDecorationLine: 'underline'} }>aqui</Text></Text>
            </View>
        </SafeAreaView>
    )
}

