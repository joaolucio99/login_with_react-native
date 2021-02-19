export function getEmail( mail ){
    return {type:'GET_USER' , payload: mail }
}

export function getPsw( password ){
    return {type:'GET_PSW' , payload: password }
}

export function getAuthUsers (user){
    return {type:'GET_USERS_REQUESTED' , payload: user }
}