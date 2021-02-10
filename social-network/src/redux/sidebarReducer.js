
let initialState = {
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
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;