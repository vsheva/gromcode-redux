import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';


const initialState = {
    products: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: state.products.concat(payload.productData),
            };
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                products: state.products.filter(product => product.id !== payload.productId),
            };
        }
        default:
            return state;
    }
};
export default cartReducer