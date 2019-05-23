import React, { Fragment, lazy, Suspense, FunctionComponent } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Grid from '../../styled/Grid';
import Loader from '../../styled/Loader';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
const PokemonPage = lazy(() => import('../PokemonPage/PokemonPage'));
const Pokedex = lazy(() => import('../Pokedex/Pokedex'));
const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Modal />
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
          <Route
            exact
            path="/pokemon/:pokemonName"
            render={() => (
              <Suspense fallback={<Loader />}>
                <PokemonPage />
              </Suspense>
            )}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
