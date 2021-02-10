import {profileApi} from "../api/api";

const ADD_POST = 'addPost';
const UPDATE_POST = 'updatePost';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

let initialState = {
    posts: [
        {
            id: 1,
            message: "Hello!",
            like: 12
        },
        {
            id: 2,
            message: "I'd like travelling",
            like: 20
        }
    ],
    newPostText: "Hi my friends",
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id:3, message: action.postText, like: 0}],
                newPostText: ''
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newVal
            }
        }
        case SET_PROFILE: {

            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state, status: action.newStatus
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state, profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const updatePostActionCreator = (text) =>  ({type: UPDATE_POST, newVal: text});
export const setUserProfileSuccess = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const setNewStatus = (newStatus) => ({type:UPDATE_STATUS, newStatus});
const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO, photos});


export const getUserProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
        dispatch(setUserProfileSuccess(data));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(status => {
        dispatch(setStatus(status));
    })
}

export const updateStatus = (newStatus) => (dispatch) => {
    profileApi.updateStatus({status: newStatus}).then(data => {
        if(data.resultCode === 0){
            dispatch(setNewStatus(newStatus));
        }
    })
}

export const updatePhoto = (newPhoto) => async (dispatch) => {
    let data = await profileApi.putPhoto(newPhoto);
    dispatch(updatePhotoSuccess(data.data.photos));
}

export const updateProfile = (profile) => async (dispatch) => {
    let data = await profileApi.putProfile(profile);
    if(data.resultCode === 0)
        dispatch(getUserProfile(profile.userId));
}



export default profileReducer;