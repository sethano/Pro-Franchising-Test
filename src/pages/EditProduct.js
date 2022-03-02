import React, { useContext } from 'react';
import { IngredientForm, ProductForm } from '../components';
import Context from '../context/Context';
import { useLocation, useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';

function EditProduct() {
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
    try {
      await apiRequest.post('/product/save', {
        body: obj,
        headers: {
          authorization: token
        },
      });
      navigate('/home');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <ProductForm />
      <IngredientForm />
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
