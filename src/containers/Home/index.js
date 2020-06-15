import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { getProducts, onSubmitProduct } from 'src/store/reducer';

const mapStateToProps = state => ({
  products: state.products,
  phoneName: state.phoneName,
  phoneType: state.phoneType,
  phonePrice: state.phonePrice,
  phoneRating: state.phoneRating,
  phoneWarranty: state.phoneWarranty,
  // phoneAvailable: state.phoneavailable,
});

const mapDispatchToProps = dispatch => ({
  getListProducts: () => {
    dispatch(getProducts());
  },
  onSubmitForm: () => {
    dispatch(onSubmitProduct());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
