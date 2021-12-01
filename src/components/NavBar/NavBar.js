import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="navbar">
      <h1>TiendaOnline</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Categorías</li>
          <li>Nosotros</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
