import { SET_USER, REMOVE_USER, } from './user.actions';


 const userReducer = (state = null, { type, action }) => {
    switch (type) {
        case SET_USER:
            return action.payload.userData


        case REMOVE_USER: {
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== payload.userId),
            };
        }

        default:
            return state;
    }
};



export default userReducer








