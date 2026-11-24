import { useState } from "react";

import "./CategoryDropdown.css";

import { GiCheckMark } from "react-icons/gi";

export default function CategoryDropdown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const optionKeys = Object.keys(options);

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
          {options[value.region]}
        </span>
        <span>{value.region}</span>
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
          {optionKeys.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                className={`category-dropdown__option ${
                  value.region === option ? "is-selected" : ""
                }`}
                onClick={() => {            
                    onChange({ ...value,  region : option });
                    setIsOpen(false);
                }}
                aria-selected={value.region === option}
              >
                <span>{options[option]}</span>

                <span>{option}</span>
                {value.region === option && (
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
