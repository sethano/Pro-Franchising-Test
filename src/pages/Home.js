import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';

function Home() {
  const { authorization } = useContext;
  const [ productList, setProductList ] = useState();
  const navigate = useNavigate();

  useEffect(async () => {
    if(!authorization) {
      const token = JSON.parse(localStorage.getItem('token'));
      const res = await apiRequest.get('/product/list', {
        headers: {
          authorization: token,
        }
      });
      setProductList(res);
    } else {
      const res = await apiRequest.get('/product/list?page=1&size=10', {
        headers: {
          authorization: authorization,
        }
      });
      setProductList(res);
    }
  }, []);

  useEffect(() => {
    if(productList) {
      navigate('/product/new');
    }
  }, [productList]);
  return (
    <p> hello! </p>
  );
}

export default Home;