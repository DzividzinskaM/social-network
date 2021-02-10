import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import appReducer from "./appReducer";


let reducers = combineReducers({
    DialogsPage: dialogReducer,
    ProfilePage: profileReducer,
    sideBar: sidebarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

//let store = createStore(reducers, applyMiddleware(thunk));

export default store;