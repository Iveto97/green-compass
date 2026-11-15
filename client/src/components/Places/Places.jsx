import "./Places.css";

import Card from "../Cards/Cards.jsx";

import { GiThreeLeaves } from "react-icons/gi";
import { useData } from "../../context/DataContext.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { useState } from "react";

export default function Places() {
  const [currentPage, setCurrentPage] = useState(1);

  const { places, setPlaces } = useData();

  const placesPerPage = 4;
  const startIndex = (currentPage - 1) * placesPerPage;
  const endIndex = startIndex + placesPerPage;

  const paginatedPlaces = places.slice(startIndex, endIndex);

  const totalPages = Math.ceil(places.length / placesPerPage);
  const pages = Array.from({length: totalPages}, (_, index) => index + 1);

  const onPageChange = (page) => {
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
      <div className="cards-container">
        <h1>
          <span className="all-icon">
            <GiThreeLeaves />
          </span>
          Всички места
        </h1>
        <div className="line-img"></div>
      </div>

      <div className="cards">
        {paginatedPlaces 
          ? paginatedPlaces.map((place) => <Card key={place.id} {...place} />)
          : ""}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pages={pages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
