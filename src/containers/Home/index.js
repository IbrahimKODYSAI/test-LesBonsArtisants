import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { getProducts } from 'src/store/reducer';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  getListProducts: () =>  {
    dispatch(getProducts());
  }
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
