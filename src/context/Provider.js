import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ authorization, setAuthorization ] = useState();

  const providerValue = {
    authorization,
    setAuthorization,
  };

  return (
    <Context.Provider value={ providerValue } >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.func,
    propTypes.object,
  ]).isRequired,
};

export default Provider;