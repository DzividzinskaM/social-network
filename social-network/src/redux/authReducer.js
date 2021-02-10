import * as axios from "axios";
import {authApi} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR = "SET_ERROR";

let initialState = {
    userId: null,
    login: null,
    email:null,
    isAuth: false,
    error: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.data,
                error: null
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.errorMessage
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}});
export const setError = (errorMessage) => ({type: SET_ERROR, errorMessage});


export const setAuthUserData = () => (dispatch) => {
        return authApi.me().then((data) => {
            if(data.resultCode === 1)
                return;
            let {id, email, login} = data.data
            dispatch(setAuthUserDataSuccess(id, login, email, true));
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData());
        }else{
            let errorMessage = "";
            data.messages.length > 0 && data.messages.forEach(message => {
                errorMessage +=(message + " ");
            });
           dispatch(setError(errorMessage));
        }
    });
}

export const logout = () => (dispatch) => {
    debugger;
    authApi.logout().then(data => {
        if(data.resultCode === 0){
            dispatch(setAuthUserDataSuccess(null, null, null, false));
        }
    })
}

export default authReducer;


//todo - refactor adding genereal form error (page login)