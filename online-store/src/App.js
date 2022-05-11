import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/product/:id" render={(props) => <Product {...props} />} />
    </Switch>
  );
}

export default App;
