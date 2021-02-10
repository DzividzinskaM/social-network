import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {Form, Field} from "react-final-form";
import {Textarea} from "../../commonComponents/FormsControl/FormsControl";
import {composeValidators, maxLengthCreator, required} from "../../utils/validate/validate";

const Dialogs = ({dialogs, messages, changeMessage, addMessage}) =>{


    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let textRef = React.createRef();

    let onChangeMessage = () =>{
        let text = textRef.current.value;
        changeMessage(text);
    }

    let onAddMessage = () => {
        addMessage();
    }

    let messageElements = messages.map(m=>{
        return <MessageItem messageText = {m.messageText}/>
    });


    /*if(!props.isAuth)
        return <Redirect to="/login"></Redirect>*/

    return <div className ={style.dialogsWrapper} >
        <div className={style.header}>DIALOGS</div>
        <div className={style.dialogs}>
            <div className={style.dialogsConstacts}>
                {dialogElements}
            </div>
            <div className={style.dialogsMessages}>
                {messageElements}
            </div>
        </div>
        <MessageForm addMessage = {addMessage} />
        {/*<div className={style.newMessage}>
            <textarea  cols="30" rows="10" 
                       ref = {textRef}
                       value = {props.newDialogText}
                       onChange = {onChangeMessage}>
            </textarea>
            <button onClick = {onAddMessage}>Add</button>
        </div>*/}
       
    </div>
}




let MessageForm = ({addMessage}) => {
    let onMessageSubmit = (value) => {
        debugger;
        addMessage(value.messageText);
    }

    return <div>
        <Form onSubmit={onMessageSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={"messageText"}
                           component={Textarea}
                            validate={composeValidators(required, maxLengthCreator(50))}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )} />
    </div>
}

export default Dialogs;