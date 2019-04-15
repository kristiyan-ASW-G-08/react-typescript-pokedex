import React, { FunctionComponent,ElementType } from 'react';
import logo from './logo.svg';
import {ThemeProvider} from 'styled-components'
import './App.css';

interface ThemeProps {
    children: JSX.Element
}
const theme ={
    colors:{
        primary:"#EF5350",
        dark:"rgb(56, 56, 56)",
        white:"#ffffff"
    },
    mediaQueries:{
    medium:"(min-width:700px)",
    large:"(min-width:1000px)",
    }
   
}
const  Theme:FunctionComponent<ThemeProps>  = ({children}) => {
    return (
     <ThemeProvider theme={theme}>
         {children}
     </ThemeProvider>
    );

}

export default Theme;
