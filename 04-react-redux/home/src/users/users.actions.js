//actions
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';


export const goPrev = () => {
    return {
        type: LEFT
    };
}

export const goNext = () => {
    return {
        type: RIGHT,
    };
};



