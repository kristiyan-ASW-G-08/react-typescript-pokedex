import React, { FunctionComponent } from 'react';
import NavItem from './NavItem';
import StyledNavbar from '../../styled/StyledNavbar';
import SearchBar from '../SearchBar/SearchBar';
const Navbar: FunctionComponent = () => {
  return (
    <StyledNavbar>
      <SearchBar />
    </StyledNavbar>
  );
};

export default Navbar;
