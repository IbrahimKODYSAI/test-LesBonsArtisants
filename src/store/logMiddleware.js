import axios from 'axios';
import {
  GET_PRODUCTS,
  setProducts,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);

  switch (action.type) {
    case GET_PRODUCTS:
      axios.get('http://localhost:3000/api/product')
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
