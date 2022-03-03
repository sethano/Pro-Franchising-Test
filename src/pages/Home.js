import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductList } from '../components';
import Context from '../context/Context';
import apiRequest from '../utils/axiosapi';

function Home() {
  const [ loading, setLoading ] = useState(true);
  const {
    productList, setProductList
  } = useContext(Context);
  const navigate = useNavigate();

  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await apiRequest.get('/product/list?page=0&size=10', {
      headers: {
        authorization: token,
      }
    });
    setProductList(res.data.content);
  },[]);


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
  };

  return (
    <div>
      { loading ? <p> Loading </p> : <ProductList />
      }
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          navigate('/product/new');
        }}
      >Create New product</button>
    </div>
  );
}

export default Home;