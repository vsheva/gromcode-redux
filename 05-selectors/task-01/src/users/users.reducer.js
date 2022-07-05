import {LEFT, RIGHT} from './users.actions';
import users from './users';

const initialState = {
  usersList: users,
  currentPage: 1
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LEFT: {
            return {
                ...state,
                currentPage: state.currentPage - 1

            };
        }
        case RIGHT: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        }

        default:
            return state;
    }
};


export default usersReducer;
