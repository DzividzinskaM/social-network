import {NavLink} from "react-router-dom";
import React from "react";

let User = ({user, followingInProgress, unfollowUser, followUser}) => {
    return <div>

        <span>
            <NavLink to={`/profile/${user.id}`}>
                {
                    user.photos.small
                        ? <img src={user.photos.small}/>
                        : <img src='https://freesvg.org/img/abstract-user-flat-4.png'/>
                }
            </NavLink>
            <div>
            {
                user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollowUser(user.id);
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        followUser(user.id);
                    }}>Follow</button>
            }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </span>
    </div>
}

export default User;