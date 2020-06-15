import axios from 'axios';
import {
  ON_SUBMIT_PRODUCT,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  setProducts,
  getProducts,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);

  switch (action.type) {
    case ON_SUBMIT_PRODUCT:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/product', {
        name: store.getState().phoneName,
        type: store.getState().phoneType,
        price: store.getState().phonePrice,
        rating: store.getState().phoneRating,
        warranty_years: store.getState().phoneWarranty,
        // available: store.getState().phoneAvailable,

      })
        .then((response) => {
          store.dispatch(getProducts(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
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
    case DELETE_PRODUCTS:
      axios.delete('http://localhost:3000/api/product/:productId', {
        productId: action.productId,
      })
        .then((response) => {
          console.log(response.data);
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
