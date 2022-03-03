import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/IngredientForm.css';

function IngredientForm() {
  const {
    ingredientCost, setIngredientCost,
    ingredientName, setIngredientName,
    ingredientQuantity, setIngredientQuantity,
    ingredients, setIngredients
  } = useContext(Context);

  const handleClickIngredients = (event) => {
    event.preventDefault();
    const obj = {
      cost: ingredientCost,
      id: 0,
      name: ingredientName,
      quantity: ingredientQuantity,
    };
    setIngredients([...ingredients, obj]);
    setIngredientCost(0);
    setIngredientName('');
    setIngredientQuantity(0);
  };

  return(
    <div className='IngredientForm'>
      INGREDIENTS:
      <br />
      <label htmlFor='ingredientName'>
        NAME: 
        <br />
        <input 
          type='text'
          name='ingredientName'
          value={ ingredientName }
          onChange={(input) => setIngredientName(input.target.value)}
        />
      </label>
      <br />
      <label htmlFor='ingredientCost'>
        COST: 
        <br />
        <input 
          type='number'
          name='ingredientCost'
          step='.01'
          value={ ingredientCost }
          onChange={(input) => setIngredientCost(input.target.value)}
        />
      </label>
      <br />
      <label htmlFor='ingredientQuantity'>
        QUANTITY: 
        <br />
        <input 
          type='number'
          name='ingredientQuantity'
          value={ ingredientQuantity }
          onChange={(input) => setIngredientQuantity(input.target.value)}
        />
      </label>
      <br />
      <button
        type='button'
        onClick={(event) => handleClickIngredients(event) }
      >
        Add New ingredient
      </button>
    </div>
  );
}

export default IngredientForm;
