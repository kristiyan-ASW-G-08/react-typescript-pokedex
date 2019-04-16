import React, { FunctionComponent, ElementType } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import './App.css';

interface ThemeProps {
  children: JSX.Element;
}
const theme = {
  colors: {
    primary: '#EF5350',
    dark: 'rgb(56, 56, 56)',
    white: '#ffffff',
    lighterDark: 'rgb(56, 56, 56,.80)',
    pokemonTypes: {
      mormal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD'
    }
  },
  mediaQueries: {
    medium: '(min-width:700px)',
    large: '(min-width:1000px)'
  },
  mixins: {
    center: 'display:grid;justify-items:center;align-content:center',
    border: 'border:solid 1px rgb(56, 56, 56,.35)'
  }
};
const Theme: FunctionComponent<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
