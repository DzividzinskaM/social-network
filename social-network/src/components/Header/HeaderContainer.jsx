import React from 'react';
import Header from "./Header";
import {logout, setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapDispatchToProps, {setAuthUserData, logout})(HeaderContainer);