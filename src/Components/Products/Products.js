import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';

import prodOne from './DSC_0003.JPG';
import prodTwo from './DSC_0008.JPG';
import prodThree from './DSC_0027.JPG';
import prodFour from './DSC_0031.JPG';
import prodFive from './DSC_0034.JPG';
import prodSix from './DSC_0039.JPG';
import prodSeven from './DSC_0074.JPG';

import './Products.css';
import { Cart } from '../../App';

export const prodObjArr = [
  {
    name: 'Tofu Rice',
    key: 'prod-one',
    image: prodOne,
    price: 12,
  },
  {
    name: 'Fresh Fruits',
    key: 'prod-two',
    image: prodTwo,
    price: 12,
  },
  {
    name: 'Veg Rolls',
    key: 'prod-three',
    image: prodThree,
    price: 12,
  },
  {
    name: 'Pancakes',
    key: 'prod-four',
    image: prodFour,
    price: 12,
  },
  {
    name: 'Noodles',
    key: 'prod-five',
    image: prodFive,
    price: 12,
  },
  {
    name: 'Laccha Parantha',
    key: 'prod-six',
    image: prodSix,
    price: 12,
  },
  {
    name: 'Pani Puri',
    key: 'prod-seven',
    image: prodSeven,
    price: 12,
  },
];


const Products = () => {
  const { cart, setCart } = useContext(Cart);

  const addToCart = (tempProd) => {
    const product = { ...tempProd };
    if (cart.find((item) => item.key === product.key)) return null;
    const tempCart = [...cart];
    product.quantity = 1;
    tempCart.push(product);

    setCart(tempCart);
  };

  return (
    <div id="product-page">
      <h2 align="center">Our Products</h2>
      {prodObjArr.map((product) => (
        <IndProdDisp key={`prod-disp${product.key}`} product={product} addToCart={addToCart} />
      ))};
      <footer>
      <p align="center">&copy; KNVS Sai Sneha</p>
    </footer>
    </div>
  );
};

const IndProdDisp = ({ product, addToCart }) => (
  <Alert variant="info">
    <img src={product.image} alt={product.name} align="left" />
    <p>{product.name}</p>
    <Button size="sm" onClick={() => addToCart(product)} id="add-to-cart" >
      Add To Cart  
    </Button>
  </Alert>
);

export default Products;
