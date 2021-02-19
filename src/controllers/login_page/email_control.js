import { getEmail } from '../../redux/actions/user'

function test_email( email , setMailAlert , style1 , style2 , dispatch){
    const regex = /\S+@\S+\.\S+/;
        if(regex.test(email)){
            setMailAlert(style1)
            dispatch(getEmail(email))
        } else if(email===""){
            setMailAlert(style1)
        } else {
            setMailAlert(style2)
        }
}

export default test_email

