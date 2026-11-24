import "./Places.css";

import Card from "../Cards/Cards.jsx";

import { GiThreeLeaves } from "react-icons/gi";
import { useData } from "../../context/DataContext.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import Filter from "../Filter/Filter.jsx";
import filterData from "../../utils/filterData.js";

export default function Places() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: ["Всички"],
    region: "Всички"
  });

  const { places, setPlaces } = useData();

  const placesPerPage = 6;

  const filteredPlaces = filterData(places, filters);

  const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const startIndex = (currentPage - 1) * placesPerPage;
  const endIndex = startIndex + placesPerPage;
  const paginatedPlaces = filteredPlaces.slice(startIndex, endIndex);

  const handleCategoryChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="places">
      <div className="hero">
        <div className="hero-shadow">
          <div className="parchment">
            <h1>Открий красивите кътчета на България</h1>
            <p>Места с история, природа и дух</p>
            <button>РАЗГЛЕДАЙ МЕСТАТА</button>
          </div>
        </div>
      </div>
      <div className="places-content">
        <div className="filter-container">
          <Filter values={filters} onChange={setFilters} />
        </div>
        <div className="cards-container">
          <h1>
            <span className="all-icon">
              <GiThreeLeaves />
            </span>
            Всички места
          </h1>
          <div className="line-img"></div>

          <div className="cards">
            {paginatedPlaces
              ? paginatedPlaces.map((place) => (
                  <Card key={place.id} {...place} />
                ))
              : ""}
            {filteredPlaces.length === 0 && (
              <p className="no-places">Няма намерени места в тази категория.</p>
            )}
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pages={pages}
          onPageChange={handleCategoryChange}
        />
      )}
    </section>
  );
}
