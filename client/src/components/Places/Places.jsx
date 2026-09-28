import "./Places.css";


import Card from "../Cards/Cards.jsx";
import { getAllPlaces } from "../../api/usePlaces.js";

import { GiThreeLeaves } from "react-icons/gi";

export default function Places() {

  const places =  getAllPlaces();

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
        <h1><span className="all-icon"><GiThreeLeaves /></span>Всички места</h1>
        <div className="line-img">
        </div>
      </div>

      <div className="cards">
      {places?.length > 0 ? (places.map((place) => <Card key={place.id} {...place} />)) : ''} 

      </div>

     
    </section>
  );
}
