import React from 'react';
import UserRouter from './Users/Router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <UserRouter />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
