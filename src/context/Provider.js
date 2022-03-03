import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState(0);
  const [ image, setImage ] = useState('');
  const [ ingredientName, setIngredientName ] = useState('');
  const [ ingredientCost, setIngredientCost ] = useState(0);
  const [ ingredientQuantity, setIngredientQuantity ] = useState(0);
  const [ ingredients, setIngredients ] = useState([]);
  const [ productList, setProductList ] = useState();

  const providerValue = {
    name, setName,
    price, setPrice,
    image, setImage,
    ingredientName, setIngredientName,
    ingredientCost, setIngredientCost,
    ingredientQuantity, setIngredientQuantity,
    ingredients, setIngredients,
    productList, setProductList,
  };

  return (
    <Context.Provider value={ providerValue } >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.func,
    propTypes.object,
  ]).isRequired,
};

export default Provider;