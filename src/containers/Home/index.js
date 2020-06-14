import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = state => ({
  datas: state.datas,
});

const mapDispatchToProps = {};

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
