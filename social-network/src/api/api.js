import * as axios from "axios";
import {Form} from "react-final-form";


let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9c005fd7-bfd1-4cd0-9fce-bb82de41d6cb"
    }
});


export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data});
    }
}

export const followApi = {
    followApi(userId) {
        return instance.post('follow/' + userId).then(response => {return response.data});
    },
    unfollowApi(userId){
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        });
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => {
               return response.data;
            });
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((response) => {
                return response.data;
        });
    },

    updateStatus(newStatus) {
        return instance
            .put(`profile/status`, newStatus)
            .then(response => response.data);
    },

    putPhoto(newPhoto) {
        const formData = new FormData();
        formData.append('image', newPhoto);
        return instance
            .put('/profile/photo', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(response => response.data);
    },

    putProfile(profile) {
        return instance
            .put(`profile`, profile)
            .then(response => response.data);
    }

}

export const authApi = {
    me() {
        return instance
            .get('auth/me')
            .then((response) => {
                return response.data
            });
    },
    login(email, password, rememberMe){
        return instance
            .post('auth/login', {email, password, rememberMe})
            .then(response => response.data);
    },
    logout(){
        return instance
            .post('auth/logout')
            .then(response => response.data);
    }
}

