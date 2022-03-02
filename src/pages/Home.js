import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';

function Home() {
  const { authorization } = useContext;
  const [ productList, setProductList ] = useState();
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate();

  useEffect(async () => {
    if(!authorization) {
      const token = JSON.parse(localStorage.getItem('token'));
      const res = await apiRequest.get('/product/list', {
        headers: {
          authorization: token,
        }
      });
      setProductList(res.data.content);
    } else {
      const res = await apiRequest.get('/product/list?page=1&size=10', {
        headers: {
          authorization: authorization,
        }
      });
      setProductList(res.data.content);
    }
  }, []);

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

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      await apiRequest.delete(`/product/delete/${id}`, {
        headers: {
          Authorization: token,
        }
      });
      alert('deleted');
    } catch (error) {
      alert(error);
    } 
  };

  return (
    <div>
      { loading ?
        <p> Loading </p> :
        productList.map((product)=>{
          return(
            <div id={product.id} name={product.name} key={product.id}>
              <img src={product.image} />
              <span> { product.name } </span>
              <button type='button' onClick={() => navigate(`/product/edit/${product.id}`)}>Edit item</button>
              <button type='button' onClick={() => handleDelete(product.id) }>Delete item</button>
            </div>
          );
        })
      }
      <p>sdfhkadjs</p>
    </div>
  );
}

export default Home;