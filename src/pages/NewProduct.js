import React, { useEffect, useState } from 'react';
import apiRequest from '../utils/axiosapi';

function NewProduct() {
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState(0);
  const [ image, setImage ] = useState('');
  const [ ingredientId, setIngredientId ] = useState(0);
  const [ ingredientName, setIngredientName ] = useState('');
  const [ ingredientCost, setIngredientCost ] = useState(0);
  const [ ingredientQuantity, setIngredientQuantity ] = useState(0);
  const [ ingredients, setIngredients ] = useState([]);


  const handleClickIngredients = (event) => {
    event.preventDefault;
    const obj = {
      cost: ingredientCost,
      id: ingredientId,
      name: ingredientName,
      quantity: ingredientQuantity,
    };
    setIngredients([...ingredients, obj]);
  };

  const handleClickNew = async (event) => {
    event.preventDefault;
    const obj = {
      id: 0,
      image: image,
      ingredients: ingredients,
      name: name,
      price: price,
    };
    const token = JSON.parse(localStorage.getItem('token'));
    await apiRequest.post('/product/save', {
      body: obj,
      headers: {
        authorization: token
      },
    });
  };

  useEffect(() => {console.log(ingredients);}, [ingredients]);

  return(
    <div>
      <form>
        <label htmlFor='name'>
          NAME: 
          <input
            type='text'
            name='name'
            value={name}
            onChange={(input) => setName(input.target.value)}
          />
        </label>
        <label htmlFor='price'>
          PRICE:
          <input 
            type='number'
            name='price'
            step='.01'
            value={price}
            onChange={(input) => setPrice(input.target.value)}
          />
        </label>
        <label htmlFor='image'>
          IMAGE (url):
          <input 
            type='text'
            name='image'
            value={image}
            onChange={(input) => setImage(input.target.value)}
          />
        </label>
        <div>
          INGREDIENTS: 
          <label htmlFor='ingredientId'>
            ID: 
            <input 
              type='number'
              name='ingredientId'
              value={ ingredientId }
              onChange={(input) => setIngredientId(input.target.value)}
            />
          </label>
          <label htmlFor='ingredientName'>
            NAME: 
            <input 
              type='text'
              name='ingredientName'
              value={ ingredientName }
              onChange={(input) => setIngredientName(input.target.value)}
            />
          </label>
          <label htmlFor='ingredientCost'>
            COST: 
            <input 
              type='number'
              name='ingredientCost'
              step='.01'
              value={ ingredientCost }
              onChange={(input) => setIngredientCost(input.target.value)}
            />
          </label>
          <label htmlFor='ingredientQuantity'>
            QUANTITY: 
            <input 
              type='number'
              name='ingredientQuantity'
              value={ ingredientQuantity }
              onChange={(input) => setIngredientQuantity(input.target.value)}
            />
          </label>
          <button
            type='button'
            onClick={(event) => handleClickIngredients(event) }
          >
            Add New ingredient
          </button>
        </div>
      </form>
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
