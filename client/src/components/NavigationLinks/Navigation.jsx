import { Link } from "react-router-dom";

import './Navigation.css';

export default function Navigation({ isOpen, toggleMenu }) {
  return (
    <ul style={{left: isOpen ? '0%' : '100%'}}>
      <li>
        <Link to="/" className="active" onClick={toggleMenu}> Начало </Link>
      </li>
      <li>
        <Link to="/places" onClick={toggleMenu}> Места </Link>
      </li>
      <li>
        <Link to="/map" onClick={toggleMenu}> Карта </Link>
      </li>
      <li>
        <Link to="/blog" onClick={toggleMenu}> Блог </Link>
      </li>
    </ul>
  );
}
