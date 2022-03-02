import React, { useContext } from 'react';
import Context from '../context/Context';

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
    <div>
      INGREDIENTS: 
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
  );
}

export default IngredientForm;
