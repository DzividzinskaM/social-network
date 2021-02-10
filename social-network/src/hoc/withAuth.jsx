import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

let withAuthRedirect = (Component) => {
    class wrapperContainer extends React.Component {
        render () {
            if(!this.props.isAuth)
                return <Redirect to="/login"></Redirect>
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, {})(wrapperContainer);
}

export default withAuthRedirect;