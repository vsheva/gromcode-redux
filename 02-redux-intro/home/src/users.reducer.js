const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(), // <---- ?
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(),  //<----- ?
            };

        default:
            return state;
    }
};

export default usersReducer;