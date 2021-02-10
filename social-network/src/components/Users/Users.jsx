import React from 'react';
import Preloader from '../../commonComponents/Preloder/Preloader';
import Paginator from "../../commonComponents/Paginator/Paginator";
import User from "./User";

let Users = ({users, followingInProgress, followUser, unfollowUser, ...props}) => {

    let usersElements = users.map(u => <div>

            <User user={u}
                  followingInProgress={followingInProgress}
                  followUser={followUser}
                  unfollowUser={unfollowUser}
            />
        </div>
    );

    return <div>
        {props.isLoad === false ? <Preloader/> : null}
        <Paginator itemsTotalCount={props.totalCount} itemsCurrentPage={props.currentPage}
                   itemsPageSize={props.pageSize} onChangedPage={props.onChangedPage}/>
        {usersElements}
    </div>
}

export default Users;