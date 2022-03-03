import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';
import '../css/ProductList.css';

function ProductList() {
  const [ loading, setLoading ] = useState(true);
  const [ productList, setProductList ] = useState();
  const [ page, setPage ] = useState(0);
  const navigate = useNavigate();

  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await apiRequest.get(`/product/list?page=${page}&size=10`, {
      headers: {
        authorization: token,
      }
    });
    setProductList(res.data.content);
  }, [page]);
  
  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await apiRequest.delete(`/product/delete/${id}`, {
        headers: {
          Authorization: token,
        }
      });
      alert('deleted');
      setPage(0);
    } catch (error) {
      alert(error);
    } 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      redirect();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [productList]);


  const redirect = () => {
    setLoading(true);
    productList ? setLoading(false) : navigate('/product/new');
    return loading;
  };

  return(
    <div className='mainProductList'>
      <div className='cardsProductList'>
        { loading ? <p> Loading! </p> :
          productList.map((product)=>{
            return(
              <div id={product.id} name={product.name} key={product.id} className='productCard'>
                <img src={product.image} />
                <span> { product.name } </span>
                <button type='button' onClick={() => navigate(`/product/edit/${product.id}`)}>Edit item</button>
                <button type='button' onClick={() => handleDelete(product.id) }>Delete item</button>
              </div>
            );
          })}
      </div>
      <div className='page'>
        <label>page
          <input 
            type='number'
            value={page}
            onChange={(input) => setPage(input.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default ProductList;
