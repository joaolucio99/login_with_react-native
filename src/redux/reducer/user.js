const INITIAL_STATE = {
    email: [],  
    password: [], 
    auth_users: [],
    loading: false,
    error: null
}

export default function (state = INITIAL_STATE , action){
    switch (action.type) {
        case 'GET_USER':
            return {...state, email: [action.payload]}
        case 'GET_PSW':
            return {...state, password: [action.payload]}
        case 'GET_USERS_REQUESTED':
            return {...state, loading:true }
        case 'GET_USERS_SUCCESS':
            return {...state, loading:false, auth_users:[action.user]}
        case 'GET_USERS_FAILED':
            return {...state, loading:false, error: [action.message]}
        default:
            return state
    }
}