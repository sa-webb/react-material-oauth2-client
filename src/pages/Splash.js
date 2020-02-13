import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Context from '../middleware/context';
import Login from '../auth/Login';

const Splash = () => {
  const { state } = useContext(Context);
  return state.isAuth ? <Redirect to='/' /> : <Login />;
};

export default Splash;
