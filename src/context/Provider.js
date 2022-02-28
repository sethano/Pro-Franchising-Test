import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider(Children) {
  const [ authorization, setAuthorization ] = useState();

  const providerValue = {
    authorization,
    setAuthorization,
  };

  return (
    <Context.Provider value={ providerValue } >
      { Children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.shape({
    typeof: 'Symbol(react.element)',
  }).isRequired,
};

export default Provider;