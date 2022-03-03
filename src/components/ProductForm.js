import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/ProductForm.css';

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
        <br />
        <input
          type='text'
          name='name'
          value={name}
          onChange={(input) => setName(input.target.value)}
        />
      </label>
      <label htmlFor='price'>
        PRICE:
        <br />
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
        <br />
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
