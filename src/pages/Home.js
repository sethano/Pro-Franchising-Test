import React, { useEffect, useContext } from 'react';
import apiRequest from '../utils/axiosapi';

function Home() {
  const { authorization } = useContext;
  // const [ productList, setProductList ] = useState();
  useEffect(async () => {
    const res = await apiRequest.get('/product/list', {
      headers: {
        authorization: authorization,
      }
    });
    console.log(res);
  });
  return (
    <p> hello! </p>
  );
}

export default Home;