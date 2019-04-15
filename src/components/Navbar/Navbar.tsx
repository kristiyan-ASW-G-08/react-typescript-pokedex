import React,{FunctionComponent} from 'react';
import NavItem from './NavItem';
import StyledNavbar from '../../styled/StyledNavbar'
const Navbar: FunctionComponent = () => {
  return (
     <StyledNavbar>
     <NavItem pathname={'/'} linkContent={'Home'}/>
     <NavItem pathname={'/add-expense'} linkContent={'Add expense'}/>
     </StyledNavbar>
  )
};

export default Navbar;