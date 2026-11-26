import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({ isOpen, toggleMenu }) {
  return (
      <ul style={{ left: isOpen ? "0%" : "100%" }} className="links-container">
        <li className="menu-link">
          <Link to="/" className="active" onClick={toggleMenu}>
            {" "}
            Начало{" "}
          </Link>
        </li>
        <li className="menu-link">
          <Link to="/places" onClick={toggleMenu}>
            {" "}
            Места{" "}
          </Link>
        </li>
        <li className="menu-link">
          <Link to="/map" onClick={toggleMenu}>
            {" "}
            Карта{" "}
          </Link>
        </li>
        <li className="menu-link">
          <Link to="/blog" onClick={toggleMenu}>
            {" "}
            Блог{" "}
          </Link>
        </li>
      </ul>
  );
}
