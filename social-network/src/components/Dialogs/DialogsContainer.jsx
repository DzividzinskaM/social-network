import { connect } from 'react-redux';
import {updateDialogActionCreator, addMessageActionCreator} from './../../redux/dialogReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from "../../hoc/withAuth";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages, 
        newDialogText: state.DialogsPage.newDialogText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(updateDialogActionCreator(text));
        }, 
        addMessage: (messageText)=>{
            dispatch(addMessageActionCreator(messageText));
        }
    };
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
/*

let withAuthRedirectWrap = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectWrap);

export default DialogsContainer;*/
