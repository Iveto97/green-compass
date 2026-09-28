import { Link } from "react-router-dom";

import './Navigation.css';

export default function Navigation({ isOpen }) {
  return (
    <ul style={{left: isOpen ? '0%' : '100%'}}>
      <li>
        <Link to="/" className="active"> Начало </Link>
      </li>
      <li>
        <Link to="/places"> Места </Link>
      </li>
      <li>
        <Link to="/map"> Карта </Link>
      </li>
      <li>
        <Link to="/blog"> Блог </Link>
      </li>
    </ul>
  );
}
