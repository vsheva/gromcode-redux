export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = langData => {
    return {
        type: SET_LANGUAGE,
        payload: {
            langData,
        },
    };
};