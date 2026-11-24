import { useState } from 'react';

import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.jsx'
import Search from '../Search/Search.jsx';

import "./Filter.css";

import { BsFillTreeFill, BsBank } from "react-icons/bs";
import { GiWhiteTower, GiWaterfall, GiMountainCave  } from "react-icons/gi";
import { FaSearch, FaChurch, FaLocationArrow, FaMonument } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { PiGrains, PiCompassRoseThin } from "react-icons/pi";
import { IoRose } from "react-icons/io5";
import { LuWaves, LuSun, LuMountain, LuTrees  } from "react-icons/lu";


export default function Filter({ values, onChange }) {

  const [selectedCategories, setSelectedCategories] = useState(["Всички"]);

  const regionIcons = {
    Всички: <IoIosMenu />,
    "Североизточен район": <LuWaves />,
    "Югоизточен район": <LuSun />,
    "Северозападен район": <LuMountain />,
    "Югозападен район": <LuTrees />,
    "Северен централен район": <PiGrains />,
    "Южен централен район": <IoRose />,
  };

  const categoryIcons = {
    "Всички": <IoIosMenu className="filter-icon" />,
    "Природа": <BsFillTreeFill className="filter-icon" />,
    "История": <GiWhiteTower className="filter-icon"/>,
    "Манастир": <FaChurch className="filter-icon"/>,
    "Култура": <BsBank className="filter-icon"/>,
    "Паметник": <FaMonument className="filter-icon"/>,
    "Водопад": <GiWaterfall className="filter-icon"/>,
    "Пещера": <GiMountainCave className="filter-icon"/>,
  }

  return (
    <div className="filter">
      <h1 className="header-filter">
        <PiCompassRoseThin />
        Филтрирай
      </h1>
      <div className="category-filter-container">
        <h2 className="category-header pl">Категории</h2>
        <div className="category-container">
          {Object.keys(categoryIcons).map((category) => (
          <label htmlFor="" className="category-label" key={category}>
            <input type="checkbox" name="category" value={category} checked={selectedCategories.includes(category)} onChange={(e) => {
              const {value, checked} = e.target;
              const updatedCategories = checked ? [...selectedCategories, value] : selectedCategories.filter((item) => item !== value);
              setSelectedCategories(updatedCategories);
              onChange({ ...values, category: updatedCategories})
            }}/>
            {categoryIcons[category]}
            <span>{category}</span>
          </label>
            ))
          }
        </div>

        <hr className='filter-line' />

        <div className="dropdown-menu-container pl">
          <h2 className="category-header">
            <FaLocationArrow />
            Район
          </h2>
          <CategoryDropdown value={values} onChange={onChange} options={regionIcons}/>
        </div>

        <div className="dropdown-menu-container pl">
          <h2 className="category-header">
            <FaSearch />
            Търсене
          </h2>
          <Search value={values} onSearch={onChange} />
        </div>
      </div>
    </div>
  );
}
