import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IngredientForm, ProductForm } from '../components/index';
import Context from '../context/Context';

import apiRequest from '../utils/axiosapi';

function NewProduct() {
  const [ message, setMessage ] = useState(false);
  const {
    image, name, ingredients, price
  } = useContext(Context);
  const navigate = useNavigate();


  const handleClickNew = async (event) => {
    event.preventDefault();
    const obj = {
      id: 0,
      image: image,
      ingredients: ingredients,
      name: name,
      price: price,
    };
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      authorization: token,
    };
    try {
      await apiRequest.post('/product/save', obj, { headers });
      navigate('/home');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    setMessage(!message);
    setTimeout(() => {
      setMessage(true);
    }, 3000);
  }, [ingredients]);

  return(
    <div className='ProductForm'>
      <ProductForm />
      <IngredientForm />
      <span hidden={message} > Ingredient Add! </span>
      <button
        type='button'
        onClick={(event) => handleClickNew(event) }
      >
        Create New Product
      </button>
    </div>
  );
}

export default NewProduct;
