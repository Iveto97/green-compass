import { useState } from "react";

import "./CategoryDropdown.css";

import { IoIosMenu } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { GiMonsteraLeaf, GiMountainRoad } from "react-icons/gi";
import { FaArchway } from "react-icons/fa6";
import { PiBinoculars } from "react-icons/pi";

export default function CategoryDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryIcons = {
    Всички: <IoIosMenu />,
    Природа: <GiMonsteraLeaf />,
    История: <FaArchway />,
    Маршрути: <GiMountainRoad />,
    "Скрити места": <PiBinoculars />,
  };

  const categories = [
    "Всички",
    "Природа",
    "История",
    "Маршрути",
    "Скрити места",
  ];

  return (
    <div className="category-dropdown">
      <button
        type="button"
        className="category-dropdown__trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="category-dropdown__menu-icon">
          <IoIosMenu />
        </span>
        <span>{value}</span>
        <span
          className={`category-dropdown__chevron ${isOpen ? "is-open" : ""}`}
        ></span>
      </button>
      {isOpen && (
        <ul
          className="category-dropdown__options"
          role="listbox"
          aria-label="Избери категория"
        >
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                role="option"
                className={`category-dropdown__option ${
                  value === category ? "is-selected" : ""
                }`}
                onClick={() => {
                    onChange(category);
                    setIsOpen(false);
                }}
                aria-selected={value === category}
              >
                <span>{categoryIcons[category]}</span>

                <span>{category}</span>
                {value === category && (
                  <span aria-hidden="true">
                    <GiCheckMark />
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
