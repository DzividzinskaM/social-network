import React from 'react';
import style from './MessageItem.module.css'

const MessageItem = (props) =>{
    return <div className={style.Item}>
        <p>{props.messageText}</p>
    </div>
}

export default MessageItem;