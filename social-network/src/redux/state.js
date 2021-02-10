import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import dialogReducer from './dialogReducer';



let store = {
    _state: {
        DialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Mariana"
                },
                {
                    id:2,
                    name: "Ann"
                },
                {
                    id:3,
                    name: "Andrew"
                }
              ],
            messages: [
                {
                    id:1,
                    messageText: "Hi!",
                },
                {
                    id:2,
                    messageText: "How are you!",
                },
                {
                    id:3,
                    messageText: "What do you do?",
                }
            ],
            newDialogText: "Hello!"
        },
        ProfilePage: {
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
            newPostText: "Hi my friends"
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Mary',
                },
                {
                    id: 2,
                    name: 'Max',
                },
                {
                    id: 3,
                    name: 'Ann',
                },
            ]
        }, 
       
    },
    getState(){
        debugger;
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    dispatch(action){
        profileReducer(action, this._state.ProfilePage);
        dialogReducer(action, this._state.DialogsPage);
        sidebarReducer(action, this._state.sideBar);
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}






export default store;
window.state = store;


