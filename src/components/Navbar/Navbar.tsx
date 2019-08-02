import React, { FunctionComponent } from "react";
import StyledNavbar from "styled/StyledNavbar";
import SearchBar from "components/SearchBar/SearchBar";
const Navbar: FunctionComponent = () => {
  return (
    <StyledNavbar>
      <SearchBar />
    </StyledNavbar>
  );
};

export default Navbar;
