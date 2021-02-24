import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Iconly/Bulk/logo.svg";
import { Img } from "./headerStyles";

function Header() {
  return (
    <div>
      <Link to="/">
        <Img src={logo} />
      </Link>
    </div>
  );
}

export default Header;
