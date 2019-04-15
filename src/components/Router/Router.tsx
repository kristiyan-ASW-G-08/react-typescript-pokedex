import React, { Fragment, lazy, Suspense,FunctionComponent } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Grid from '../../styled/Grid'
import Loader from '../../styled/Loader';
import Navbar from '../Navbar/Navbar'
// const ExpenseForm = lazy(() => import('./ExpenseForm/ExpenseForm'));
const Pokedex = lazy(() => import('../Pokedex/Pokedex'));
const Router: FunctionComponent = () => {
  return (
  <BrowserRouter>
          <>
            <Navbar />
              <Switch>
              <Route
              exact
                  path="/"
                  render={() => (
                    <Suspense fallback={<Loader />}>
                    <Pokedex />
                    </Suspense>
                  )}
                />
              {/* <Route
              exact
                  path="/add-expense"
                  render={() => (
                    <Suspense fallback={<Loader />}>
                      <ExpenseForm />
                    </Suspense>
                  )}
                />
              */}
              </Switch>
          </>
        </BrowserRouter>)
};

export default Router;