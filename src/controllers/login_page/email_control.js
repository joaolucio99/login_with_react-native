import { getEmail } from '../../redux/actions/user'

function test_email( email , setMailAlert , style1 , style2 , dispatch , setMailAlertInput , style3 , style4){
    const regex = /\S+@\S+\.\S+/;       /*verificaçao front end email*/
        if(regex.test(email)){
            setMailAlert(style1)
            setMailAlertInput(style3)
            dispatch(getEmail(email))
        } else if(email===""){
            setMailAlert(style1)
            setMailAlertInput(style3)
        } else {
            setMailAlert(style2)
            setMailAlertInput(style4)
        }
}

export default test_email

