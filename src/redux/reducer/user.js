const INITIAL_STATE = {
    email: [],  
    password: [], 
}

export default function (state = INITIAL_STATE , action){
    switch (action.type) {
        case 'GET_USER':
            return {...state, email: [action.payload]}
        case 'GET_PSW':
            return {...state, password: [action.payload]}
        default:
            return state
    }
}