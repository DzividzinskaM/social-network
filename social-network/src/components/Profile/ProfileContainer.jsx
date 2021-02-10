import React from "react";
import Profile from "./Profile";
import {getUserStatus, getUserProfile, updatePhoto, updateStatus, updateProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    setProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.loginedUserId;
            if (!userId) {
                this.props.history.push('/users');
            }
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    componentDidMount() {
       this.setProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.setProfile();
        }

    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        myId: state.auth.userId,
        isAuth: state.auth.isAuth,
        loginedUserId: state.auth.userId
    }
};


export default compose(
    connect(mapStateToProps, {setUserProfile: getUserProfile, getUserStatus,
        updateStatus, updatePhoto, updateProfile}),
    withRouter
)(ProfileContainer);




