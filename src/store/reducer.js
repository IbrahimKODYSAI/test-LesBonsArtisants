// import initialData from 'src/data/Products.json';

// == Initial State
const initialState = {
  products: [],
};

// == Types
export const GET_PRODUCTS = 'GET_PRODUCTS';
const PRODUCT_DELETE = 'PRODUCT_DELETE';
const SET_PRODUCTS = 'SET_PRODUCTS';
// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_DELETE: {
      const { products } = state;
      const newProducts = products.filter(product => product._id !== action._id);
      return {
        ...state,
        products: newProducts,
      };
    }
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

// == Action Creators
export const productDelete = _id => ({
  type: PRODUCT_DELETE,
  _id,
});
export const getProducts = () => ({
  type: GET_PRODUCTS,
});
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products,
});

// == Export
export default reducer;
