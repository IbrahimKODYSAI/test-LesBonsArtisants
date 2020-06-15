import { connect } from 'react-redux';

import Product from 'src/components/Home/Product';
import { productDelete } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  removeProduct: (productId) => {
    dispatch(productDelete(productId));
  },
});

// Container
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

// == Export
export default ProductContainer;
