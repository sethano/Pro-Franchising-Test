import React, { useContext, useEffect, useState } from 'react';
import { IngredientForm, ProductForm } from '../components';
import Context from '../context/Context';
import { useLocation, useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';

function EditProduct() {
  const [ message, setMessage ] = useState(false);
  const {
    image, name, ingredients, price
  } = useContext(Context);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClickNew = async (event) => {
    const slice = pathname.slice(14);
    event.preventDefault();
    const obj = {
      id: slice,
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

  return (
    <div>
      <ProductForm />
      <IngredientForm />
      <span hidden={message} > Ingredient Add! </span>
      <button
        type='button'
        onClick={(event) => handleClickNew(event) }
      >
        Save
      </button>
    </div>
  );
}

export default EditProduct;
