import React from 'react';
import {connect} from 'react-redux';
import {
    followUser,
    isLoadData,
    requestUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingProgress,
    unfollowUser
} from './../../redux/usersReducer';
import Users from './Users';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoad,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/usersSelector";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangedPage = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return <Users {...this.props}
                      onChangedPage={ this.onChangedPage}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoad: getIsLoad(state),
        followingInProgress: getFollowingInProgress(state)
    };
}

/* 
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        isLoadData: (isLoad) => {
            dispatch(togglePreloaderAC(isLoad));
        }
    }
} */

export default connect(mapStateToProps,
    {
        followUser, unfollowUser, setUsers,
        setTotalCount, setCurrentPage, isLoadData,
        toggleFollowingProgress, getUsers: requestUsers
    })(UsersContainer);

