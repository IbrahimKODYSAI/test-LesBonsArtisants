import React from 'react';
import PropTypes from 'prop-types';


import './home.scss';
import Product from 'src/containers/Home/Product';

const Home = ({ products, getListProducts }) => {
  getListProducts();
  return (
    <div>
      <ul>
        {products.map(product => (
          <Product key={product._id} {...product} />
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  getListProducts: PropTypes.func.isRequired,
};

export default Home;
