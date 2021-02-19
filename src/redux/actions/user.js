export function getEmail( mail ){
    return {type:'GET_USER' , payload: mail }
}

export function getPsw( password ){
    return {type:'GET_PSW' , payload: password }
}