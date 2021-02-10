import React from 'react';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div className="profile">
        <ProfileInfo {...props}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;
