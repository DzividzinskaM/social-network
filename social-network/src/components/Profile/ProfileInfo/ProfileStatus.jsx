import React from 'react';
import style from './ProfileInfo.module.css';
import {getUserStatus, updateStatus} from "../../../redux/profileReducer";
import {connect} from "react-redux";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.status
    };


    componentDidMount() {
        this.props.getUserStatus(this.props.userId);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                localStatus: this.props.status
            });
        }
    }

    activateEditMode(){
        if(this.props.userId === this.props.myId){
            this.setState({
                editMode: true
            });

        }

    }

    disactivateEditMode(){
        this.props.updateStatus(this.state.localStatus);
        this.setState({
            editMode: false
        });
    }

    onChangeStatus = (e) => {
        this.setState({
            localStatus: e.target.value
        });
    }

    render() {
        return <div>
            {
                !this.state.editMode
                && <div className={style.status} onDoubleClick={this.activateEditMode.bind(this)} >
                    <span>{this.props.status}</span>
                </div>
            }
            {this.state.editMode
                && <div>
                    <input onBlur={this.disactivateEditMode.bind(this)}
                           onChange={this.onChangeStatus}
                           autoFocus={true} type="text" value={this.state.localStatus}/>
                </div>
            }
        </div>
    }
}

let mapStateToProps = (state) => ({
    status: state.ProfilePage.status,
    myId: state.auth.userId
});





export default connect(mapStateToProps, {getUserStatus, updateStatus})(ProfileStatus);