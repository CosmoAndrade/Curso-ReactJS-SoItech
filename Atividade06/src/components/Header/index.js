import React from "react";
import { WrapperHeader } from "./style";

const Header = ({ logo}) => {
  return (
    <WrapperHeader>
      <img src={logo} />
      
       
    </WrapperHeader>
  );
};
export default Header;
