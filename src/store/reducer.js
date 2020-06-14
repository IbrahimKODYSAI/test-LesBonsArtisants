import initialData from 'src/data/Products.json';

// == Initial State
const initialState = {
  datas: initialData,
};

// == Types
const PRODUCT_DELETE = 'PRODUCT_DELETE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_DELETE: {
      const { datas } = state;
      const newDatas = datas.filter(data => data._id !== action._id);
      return {
        ...state,
        datas: newDatas,
      };
    }
    default:
      return state;
  }
};

// == Action Creators
export const productDelete = _id => ({
  type: PRODUCT_DELETE,
  _id,
});

// == Export
export default reducer;
