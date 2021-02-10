import {followApi, usersApi} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
let TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    totalCount: 54,
    pageSize: 5,
    currentPage: 10,
    isLoad: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) =>{

    switch (action.type) {
        case FOLLOW: {

            let copyState = {
                ...state, 
                users: [...state.users.map(u => {
                    if(u.id === action.userId){
                        u.followed = true;
                    }
                    return u;
                })]
            };
            return copyState;
        }
        case UNFOLLOW: {
            let copyState = {
                ...state, 
                users: [...state.users.map(u => {
                    if(u.id === action.userId){
                        u.followed = false;
                    }
                    return u;
                })]
            };
            return copyState;
        }
        case SET_USERS: {
            let copyState = {
                ...state, 
                users: [...action.users.items]
            };
            return copyState;
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isLoad: action.isLoad
            };
        }
        case TOGGLE_FOLLOWING_PROGRESS: {

            let copyState = {
                ...state,
                followingInProgress:
                    action.isFollowProgress
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)

            }
            console.log(copyState.followingInProgress);
            return copyState;
        }
        default:
            return state;
    }
}

export const followUserSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowUserSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const isLoadData = (isLoad) => ({type: TOGGLE_PRELOADER, isLoad});
export const toggleFollowingProgress = (isFollowProgress, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFollowProgress, userId});

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(isLoadData(false));
    dispatch(setCurrentPage(currentPage));

    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(isLoadData(true));
        dispatch(setUsers(data));
        dispatch(setTotalCount(data));
    });
}

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followApi.followApi(userId).then((data) => {
        if (data.resultCode === 0)
            dispatch(followUserSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    });
}
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followApi.unfollowApi(userId).then((data) => {
        if (data.resultCode === 0)
            dispatch(unfollowUserSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    });
}

export default usersReducer;

