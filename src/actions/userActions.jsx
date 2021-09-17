import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

// Function defines a user login information

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.post("/api/user/login", { email, password }, config);

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        sessionStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.responce && error.responce.data.message ? error.message.data.message : error.message,
        });
    }
};


// defined function remove userInfo from the localStroage and push to root of application

export const logout = () => async (dispatch) => {
    sessionStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGIN_LOGOUT });
};


// defined function help client to register details in the database and set localstroge with userinfo

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.post("/api/user/register", { name, email, password }, config);

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        sessionStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.responce && error.responce.message ? error.responce.data.message : error.message,
        });
    }
};