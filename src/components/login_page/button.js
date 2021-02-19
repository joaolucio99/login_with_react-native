import React , { useContext , useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Text , View} from 'react-native'
import Display from '../../context/display_context'
import loginControl from '../../controllers/login_page/login_control'
import { getAuthUsers } from '../../redux/actions/user'


export default props => {

    const dispatch = useDispatch();
    const { display:{ Styles } } = useContext(Display)
    const users = useSelector(state => state.user.auth_users)
    const user_email = useSelector(state => state.user.email)
    const user_psw = useSelector(state => state.user.password)
    const [shouldShow, setShouldShow] = useState(false);
    const [msg , setMsg] = useState("");

    useEffect(() => {
        if(users.length === 0) dispatch(getAuthUsers())
        else return
    }, [])

return (
    <>
    <View style={Styles.LoginPage.cont_button}>
        <LinearGradient
            style={Styles.LoginPage.button_bkground}
            useAngle={true}
            angle={268}
            colors={['#383E71', '#9D25B0']}
            angleCenter={{x: 0.5, y: 0.5}}
            >
            <View style={{alignContent:'center',justifyContent:'center'}}>
                <Text  
                    style={Styles.LoginPage.button_txt}
                    onPress={() => loginControl( users , user_email , user_psw , setShouldShow , setMsg)}
                >ENTRAR</Text>
            </View>
        </LinearGradient> 
    </View>
    {shouldShow ? (
    <View style={Styles.LoginPage.cont_alert} >
        <Text style={Styles.LoginPage.alert_txt}>{msg}</Text>
        <LinearGradient
            style={Styles.LoginPage.button_exit_bkground}
            useAngle={true}
            angle={268}
            colors={['#383E71', '#9D25B0']}
            angleCenter={{x: 0.5, y: 0.5}}
            >
            <View style={{alignContent:'center',justifyContent:'center'}}>
                <Text  
                    onPress={()=>setShouldShow(!shouldShow)}
                    style={Styles.LoginPage.button_exit_txt}
                >OK</Text>
            </View>
        </LinearGradient> 
    </View>
    ) : null}
    </>
    )
}