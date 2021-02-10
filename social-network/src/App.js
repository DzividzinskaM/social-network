import React from 'react';
import "./App.css";
import Navigation from './components/Navigation/Navigation';
import {Route} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer";
import Preloader from "./commonComponents/Preloder/Preloader";
import UsersContainer from './components/Users/UsersContainer';
import withSuspense from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.isInitialize) {
            return <Preloader/>
        }
        return <div className='wrapper'>
            <HeaderContainer/>
            <Navigation/>
            <Route path='/dialogs'
                   render={withSuspense(DialogsContainer)}/>
            <Route path='/profile/:userId?'
                   render={withSuspense(ProfileContainer)}/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>
            <Route path='/login'
                   render={() => <Login/>}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isInitialize: state.app.isInitialize
})

export default connect(mapStateToProps, {initialize})(App);
