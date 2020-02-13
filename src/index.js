import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Context from './middleware/context';
import reducer from './Reducer';
import ProtectedRoute from './utils/ProtectedRoute';
import * as ROUTES from './Routes';

import App from "./pages/App";
import Splash from "./pages/Splash";

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
      <Switch>
        <ProtectedRoute exact path={ROUTES.APP} component={App} />
        <Route path={ROUTES.SPLASH} component={Splash} />
      </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
