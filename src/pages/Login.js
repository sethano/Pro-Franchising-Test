import React, { useState } from 'react';
import apiRequest from '../utils/axiosapi';

function Login() {

  const [ email, setEmail ] = useState('debb0833-d348-4258-b58f-0e939adcbb6a@profranchising.com.br');
  const [ password, setPassword ] = useState('958a2198-ed46-44bc-b05d-0f66691489f0');
  const [ authorization, setAuthorization ] = useState();

  const handleClick = (event) => {
    event.prevendDefault;
    const auth = {
      password: password,
      username: email,
    };
    // const body = JSON.stringify(auth);
    // console.log(body);
    apiRequest.post('/auth/login', auth).then((res) => setAuthorization(res.headers.authorization));
    console.log(authorization);
  };

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
