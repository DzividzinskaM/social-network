import React from "react";
import {connect} from 'react-redux';
import {addPostActionCreator, updatePostActionCreator} from './../../redux/profileReducer';
import MyPosts from './MyPosts';

/* const MyPostsContainer = () =>{
    return <ContextStore.Consumer>
        {
            (store) => {
                let state= store.getState();

                let addingPost = () =>{
                    store.dispatch(addPostActionCreator());
                    store.dispatch(updatePostActionCreator(''));
                }
            
                let changePost = (text) => {
                    store.dispatch(updatePostActionCreator(text));
                }
            
                return <MyPosts addPost = {addingPost}
                                updatePost = {changePost}
                                posts = {state.ProfilePage.posts}
                                newPostText = {state.ProfilePage.newPostText} />
            }
        }
    </ContextStore.Consumer>

    
} */


class MyPostsContainer extends React.Component {
    render() {
        console.log("posts render");
        return <MyPosts {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        },
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);