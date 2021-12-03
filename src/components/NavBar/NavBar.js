import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

import "./NavBar.scss";
export const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h1>TiendaOnline</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/category/category1">Categoría 1</Link>
          </li>
          <li>
            <Link to="/category/category2">Categoría 2</Link>
          </li>
          <li>
            <Link to="/category/category3">Categoría 3</Link>
          </li>
        </ul>
      </nav>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
