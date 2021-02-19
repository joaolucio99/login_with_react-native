import React , { useContext , useState } from 'react'
import { useDispatch } from 'react-redux'
import { View , Text , TextInput} from 'react-native'
import Display from '../../context/display_context'
import MailControl from '../../controllers/login_page/email_control'
import { getPsw } from '../../redux/actions/user'

export default props => {

    const dispatch = useDispatch();
    const { display:{ Styles } } = useContext(Display)
    const [mailAlert , setMailAlert] = useState(Styles.LoginPage.inp_h4_txt)

    return (
        <View style = {Styles.LoginPage.inp_bkground}>
            <Text style = {Styles.LoginPage.inp_h1_txt}>Olá, seja {"\n"}bem-vindo! </Text>
            <Text style = {Styles.LoginPage.inp_h2_txt}>Para acessar a plataforma, faça seu login. </Text>
            <View>
                <View>
                    <Text style = {Styles.LoginPage.inp_h3_txt} >E-MAIL</Text>
                    <TextInput
                        onChangeText={ email => MailControl( email , setMailAlert , Styles.LoginPage.inp_h4_txt , Styles.LoginPage.inp_h4_txt_active , dispatch)}
                        keyboardType={'email-address'}
                        placeholder="user.name@mail.com"
                        placeholderTextColor="rgba(152, 159, 219, 1)"
                        style={Styles.LoginPage.input_log}
                    ></TextInput>
                    <Text style = {mailAlert}>Digite um e-mail válido;</Text>
                </View>
                <View>
                    <Text style = {Styles.LoginPage.inp_h3_txt} >SENHA</Text>
                    <TextInput
                        onChangeText={psw => dispatch(getPsw(psw))}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        placeholder="*******"
                        placeholderTextColor="rgba(152, 159, 219, 1)"
                        style={Styles.LoginPage.input_log}
                    ></TextInput>
                </View>
            </View>
        </View>
    )
}