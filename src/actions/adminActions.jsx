import axios from "axios";
import { ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_LOGOUT, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_REGISTER_FAIL } from '../constants/adminConstants';


// Function defines a admin login information 
export const admin_login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LOGIN_REQUEST });

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.post("/api/user/login", { email, password }, config);

        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("adminInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.responce && error.responce.data.message ? error.message.data.message : error.message,
        });
    }
};


// define function to remove adminInfo from the localstorage and push to root of application
export const admin_logout = () => async (dispatch) => {
    localStorage.removeItem("adminInfo");
    dispatch({ type: ADMIN_LOGIN_LOGOUT });
};

/* function help admin to register details in the database and set items to localstroage with adminInfo but there is a problem with this function with the help of xss attacker are able to find admin details from the localstorage so we have to use cookie based authentication to prevent this issue.*/

export const admin_register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_REGISTER_REQUEST });
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.post("/api/user/register", { name, email, password }, config);

        dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("adminInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAIL,
            payload: error.responce && error.responce.message ? error.responce.data.message : error.message,
        });
    }
}