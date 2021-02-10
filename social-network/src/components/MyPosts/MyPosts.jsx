import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../utils/validate/validate";
import {Textarea} from "../../commonComponents/FormsControl/FormsControl";

const MyPosts = ({addPost, posts}) => {
    let textRef = React.createRef();

    let postElements = posts.map(p => <Post messageText={p.message} like={p.like}/>)


    return <div className="MyPosts">
        <p className={style.title}>My posts</p>
        <AddNewPostForm addPost={addPost}/>
        {/*<div className={style.form}>
            <input type="text" ref = {textRef} className={style.field} 
                    onChange = {onChangePost} 
                    placeholder="your news..." 
                    value={props.newPostText}/>
            <button onClick = {onAddPost}>Send</button>
        </div>*/}
        {postElements}
    </div>
}


const maxLength30 = maxLengthCreator(30)

let AddNewPostForm = ({addPost}) => {

    let onPostSubmit = (value) => {
        addPost(value.postText);
    }

    return <div>
        <Form onSubmit={onPostSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={"postText"}
                           component={Textarea}
                           validate={composeValidators(required, maxLength30)}
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )}/>
    </div>
}

export default MyPosts;