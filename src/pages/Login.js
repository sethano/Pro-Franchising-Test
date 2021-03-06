import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import apiRequest from '../utils/axiosapi';
import axios from 'axios';
import '../css/Login.css';


function Login() {
  const [ email, setEmail ] = useState('debb0833-d348-4258-b58f-0e939adcbb6a@profranchising.com.br');
  const [ password, setPassword ] = useState('958a2198-ed46-44bc-b05d-0f66691489f0');
  const navigate = useNavigate();
  const [ login, setLogin ] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault;
    const auth = {
      password: password,
      username: email,
    };
    try {
      apiRequest.post('/auth/login', auth)
        .then((res) => {
          localStorage.setItem('token', JSON.stringify(res.headers.authorization));
          axios.defaults.headers.common.authorization = res.headers.authorization;
        });
      setLogin(!login);
    } catch (error) {
      alert('Invalid Data');
    }
  };

  useEffect(() => {
    if(login) {
      navigate('/home');
    }
  },[login]);

  return (
    <div>
      <form>
        <input
          type='text'
          name='email'
          className='email input'
          placeholder='EMAIL'
          value={email}
          onChange={(input) => setEmail(input.target.value)}
        />
        <input
          type='password'
          name='password'
          className='password input'
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
