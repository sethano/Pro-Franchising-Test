import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Context from '../context/Context';
import apiRequest from '../utils/axiosapi';


function Login() {
  const [ email, setEmail ] = useState('debb0833-d348-4258-b58f-0e939adcbb6a@profranchising.com.br');
  const [ password, setPassword ] = useState('958a2198-ed46-44bc-b05d-0f66691489f0');
  const navigate = useNavigate();
  const [ login, setLogin ] = useState(false);
  const { 
    authorization,
    setAuthorization,
  } = useContext(Context);

  const handleClick = async (event) => {
    event.prevendDefault;
    const auth = {
      password: password,
      username: email,
    };
    try {
      apiRequest.post('/auth/login', auth)
        .then((res) => {
          localStorage.setItem('token', JSON.stringify(res.headers.authorization));
          setAuthorization(res.headers.authorization);
        });
      setLogin(!login);
    } catch (error) {
      alert('Invalid Data');
    }
  };

  useEffect(() => {
    console.log(authorization);
    if(authorization && login) {
      navigate('/home');
    }
  },[authorization]);

  return (
    <div>
      <form>
        <input
          type='text'
          name='email'
          placeholder='EMAIL'
          value={email}
          onChange={(input) => setEmail(input.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='PASSWORD'
          value={password}
          onChange={(input) => setPassword(input.target.value)}
        />
      </form>
      <button type='submit' onClick={(event) => handleClick(event)}> Login </button>
    </div>
  );
}

export default Login;
