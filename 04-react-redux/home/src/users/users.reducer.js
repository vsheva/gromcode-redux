import { LEFT, RIGHT } from './users.actions';

const initialState = {
  usersList: [],
  currentPage: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEFT: {
      return {
        ...state,
        currentPage:state.currentPage-1

      };
    }
    case RIGHT: {
      return {
        ...state,
        currentPage:state.currentPage+1
      };
    }

    default:
      return state;
  }
};

export default userReducer;
