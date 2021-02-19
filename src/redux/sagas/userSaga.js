import api from '../../services/api'
import {call , put , takeEvery} from 'redux-saga/effects'

    function getApi(){
        return api.get("users")
            .then( response => {
                return response.data
            })
            .catch((err) => { throw err });
    }

    function* fetchUsers( action ){
        try{
            const users = yield call(getApi);
            yield put({type:'GET_USERS_SUCCESS', user:users})
        } catch (e) {
            yield put({type: 'GET_USERS_FAILED',message:e.message})
        }
    }

    function* userSaga() {
        yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
    }

    export default userSaga