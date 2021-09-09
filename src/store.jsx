import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import {adminLoginReducer} from './reducers/adminReducers';
import {adminRegisterReducer} from './reducers/adminReducers';



const reducer = combineReducers({
    // this will contains our reducers

    // user reducers
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    // admin reducers
    adminLogin: adminLoginReducer,
    adminRegister: adminRegisterReducer,

});

const userInfoFromStroage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

const adminInfoFromStroage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem("adminInfo")) : null;

const initialState = {
    userLogin: {userInfoFromStroage},
    adminLogin: {adminInfoFromStroage},
}
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;