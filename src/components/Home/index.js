import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import './home.scss';
import Product from 'src/containers/Home/Product';
import Field from 'src/containers/Home/Field';

const Home = ({ 
  products,
  getListProducts,
  phoneName,
  phoneType,
  phonePrice,
  phoneRating,
  phoneWarranty,
  phoneAvailable,
  onSubmitForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };
  useEffect(() => {
    getListProducts();
  }, []);
  return (
    <div>
      <div><h1>+ Add a Product</h1></div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="phoneName"
            placeholder="Phone Name"
            type="phoneName"
            value={phoneName}
          />
          <Field
            name="phoneType"
            placeholder="Phone Type"
            type="phoneType"
            value={phoneType}
          />
          <Field
            name="phonePrice"
            placeholder="Phone Price"
            type="number"
            value={phonePrice}
          />
          <Field
            name="phoneRating"
            placeholder="Phone Rating"
            type="number"
            value={phoneRating}
          />
          <Field
            name="phoneWarranty"
            placeholder="Phone Warranty"
            type="number"
            value={phoneWarranty}
          />
          <Field
            name="phoneAvailable"
            placeholder="Phone Availability"
            type="boolean"
            value={phoneAvailable}
          />
          <button
            className="form-submit form-submit--login"
            type="submit"
          >
            Submit
          </button>
        </form>   
      </div>
      <ul>
        {products.map(product => (
          <Product key={product._id} {...product} />
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  getListProducts: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  phoneName: PropTypes.string.isRequired,
  phoneType: PropTypes.string.isRequired,
  phonePrice: PropTypes.number.isRequired,
  phoneRating: PropTypes.number.isRequired,
  phoneWarranty: PropTypes.number.isRequired,
  phoneAvailable: PropTypes.bool,
};

export default Home;
