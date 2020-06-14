import React from 'react';
import PropTypes from 'prop-types';


import './home.scss';
import Product from 'src/containers/Home/Product';

const Home = ({ datas }) => {

  return (
    <div>
      <ul>
        {datas.map(data => (
          <Product key={data._id} {...data} />
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Home;
