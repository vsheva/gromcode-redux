import {ADD, DELETE} from "./users.actions.js"

const initialState = {
    usersList: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(user), // <---- ?
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(()=>),  //<----- ?
            };

        default:
            return state;
    }
};

export default usersReducer;