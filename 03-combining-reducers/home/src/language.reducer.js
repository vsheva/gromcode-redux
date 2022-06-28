import { SET_LANGUAGE } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.langData;

    default:
      return state;
  }
};

export default languageReducer;
