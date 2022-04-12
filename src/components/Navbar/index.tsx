import * as React from "react";
import { Link } from "gatsby";
import "./style.scss";

const Navbar = (): JSX.Element => {
  return (
    <div className="pb-10 text-slate-500 text-3xl">
      <Link to="/" className="navbar-item" activeClassName="navbar-item-active">
        Random
      </Link>
      <Link
        to="/favorite"
        className="navbar-item"
        activeClassName="navbar-item-active"
      >
        Favorite
      </Link>
      <Link
        to="/contented"
        className="navbar-item"
        activeClassName="navbar-item-active"
      >
        Contented
      </Link>
    </div>
  );
};

export default Navbar;
