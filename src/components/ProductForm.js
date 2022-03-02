import React, { useContext } from 'react';
import Context from '../context/Context';

function ProductForm() {
  const {
    name, setName,
    price, setPrice,
    image, setImage,
  } = useContext(Context);

  return(
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
      
    </form>
  );
}

export default ProductForm;
