import Dataproducts from 'src/data/Products.json';

// == Initial State
const initialState = {
  products: Dataproducts,
  phoneName: '',
  phoneType: '',
  phonePrice: '',
  phoneRating: '',
  phoneWarranty: '',
  // phoneAvailable: '',
};

// == Types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
export const ON_SUBMIT_PRODUCT = 'ON_SUBMIT_PRODUCT';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
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
export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});
export const productDelete = productId => ({
  type: DELETE_PRODUCTS,
  productId,
});
export const getProducts = () => ({
  type: GET_PRODUCTS,
});
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products,
});
export const onSubmitProduct = () => ({
  type: ON_SUBMIT_PRODUCT,
});

// == Export
export default reducer;
