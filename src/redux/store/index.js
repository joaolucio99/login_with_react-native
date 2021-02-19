import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';
import Saga from '../sagas/userSaga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(Saga)

export default store