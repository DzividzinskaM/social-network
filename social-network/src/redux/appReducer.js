import {setAuthUserData} from "./authReducer";

const INITIALIZE_APP = "INITIALIZE_APP";

let initialState = {
    isInitialize: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP: {
            return{
                ...state,
                isInitialize: true
            }
        }
        default:
            return state
    }
}

export const initializeSuccess = () => ({type: INITIALIZE_APP});

export const initialize = () => (dispatch) => {
    let promise = dispatch(setAuthUserData());
    Promise.all([promise])
        .then(result => {
            dispatch(initializeSuccess());
        })
}


export default appReducer;