const UPDATE_DIALOG = 'updateDialog';
const ADD_MESSAGE = 'addMessage';

let initialState = {
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
    ]
}
let dialogReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, messageText: action.messageText}]
            }
        }
        case UPDATE_DIALOG: {
            return {
                ...state,
                newDialogText: action.newVal
            }
        }
        default:
            return state;
    }
};



export const updateDialogActionCreator = (text) => ({type: UPDATE_DIALOG, newVal: text});
export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText});

export default dialogReducer;