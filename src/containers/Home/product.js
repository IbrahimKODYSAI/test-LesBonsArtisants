import { connect } from 'react-redux';

import Product from 'src/components/Home/Product';
import { productDelete } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: () => {
    dispatch(productDelete(ownProps._id));
  },
});

// Container
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

// == Export
export default ProductContainer;
