import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

const deleteProduct = (productId) => {
  fetch(`http://localhost:3000/api/product/${productId}`, {
    method: 'delete',
  })
    .then(response => response)
    .catch(error => error);
};

const Product = ({
  _id,
  removeProduct,
  name,
  type,
  price,
  rating,
  warranty_years,
  available,
}) => {
  const classes = useStyles();
  return (
    <List id="lists" className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
        />
        <ul>
          {/* <li>Name : {data.name}</li> */}
          <li>Type : {type}</li>
          <li>Price : {price} €</li>
          <li>Rating : {rating} </li>
          <li>Warranty Years : {warranty_years}</li>
          <li>Available: {available === false ? 'No' : 'Yes'} </li>
        </ul>
      </ListItem>
      <button type="button" onClick={removeProduct(_id)}>Delete</button>
      <Divider component="li" />
    </List>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  warranty_years: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Product;
