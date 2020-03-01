import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from '../src/components/pages/home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/:id" component={UserPage} />
  <Route path="/categories" component={CategoriesPage} />
  <Route path="/categories/:id" component={IndividualCategoryPage} /> */}
    </Switch>
  );
}

export default App;
