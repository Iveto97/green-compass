import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";

import "./PlaceDetails.css";
import Map from "../Maps/Map.jsx";

import { GiTreeBranch, GiFruitTree } from "react-icons/gi";
import { IoLocation, IoCarOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward, IoIosPeople } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsPersonWalking, BsBank } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

export default function PlaceDetails() {
  const { placeId } = useParams();

  const { placeDetails, fetchPlaceDetails } = useData();

  useEffect(() => {
    if (placeId) {
      fetchPlaceDetails(placeId);
    }
  }, [placeId]);

  return (
    <section className="details-section">
      <div className="details-hero">
        <img src={placeDetails.hero_img} alt={placeDetails.name} />
        <div className="details-hero-overlay"></div>
        <Link to={"/places"} className="back">
          <span className="arrow">
            <IoIosArrowBack />
          </span>
          КЪМ ВСИЧКИ МЕСТА
        </Link>
        <div className="details-info">
          <h1>{placeDetails.name}</h1>
          <div className="destination-info">
            <SlLocationPin />
            {placeDetails.region}
            &nbsp; • &nbsp; {placeDetails.category}
          </div>
        </div>
      </div>

      <div className="for-place-container">
        <div className="for-place-info-container">
          <div className="for-place">
            <span className="eyebrow">
              ОТКРИЙ КРАСОТАТА НА БЪЛГАРИЯ <hr className="gold-line" />
            </span>
            <div className="for-place-header">
              <span className="branch-icon">
                <GiTreeBranch />
              </span>
              <h2>За мястото</h2>
            </div>
            <p>{placeDetails.content}</p>
          </div>
          <img src="/leaf.png" alt="Leaf" className="leaf" />
        </div>

        <div className="info">
          <div className="info-header">
            <h3>
              Полезна информация <hr className="gold-line" />
            </h3>
            <span className="eyebrow">МАЛКИ ДЕТАЙЛИ, ГОЛЕМИ ПРИКЛЮЧЕНИЯ </span>
          </div>
          {placeDetails["practical_info"] && (
            <div className="information-container">
              <div className="practical-info">
                <GrMapLocation className="information-icon" />
                <div className="more-practical">
                  <strong>Регион</strong>
                  <p>{placeDetails.region}</p>
                </div>
              </div>
              <div className="practical-info">
                <BsBank className="information-icon" />
                <div className="more-practical">
                  <strong>Категория</strong>
                  <p>{placeDetails.category}</p>
                </div>
              </div>
              <div className="practical-info">
                <GiFruitTree className="information-icon" />
                <div className="more-practical">
                  <strong>Най-добър сезон</strong>
                  <p>{placeDetails["practical_info"].season}</p>
                </div>
              </div>
              <div className="practical-info">
                <IoCarOutline className="information-icon" />
                <div className="more-practical">
                  <strong>Достъп</strong>
                  <p>{placeDetails.practical_info?.access}</p>
                </div>
              </div>
              <div className="practical-info">
                <IoIosPeople className="information-icon" />
                <div className="more-practical">
                  <strong>Подходящо за</strong>
                  <p>{placeDetails.practical_info?.suitableFor}</p>
                </div>
              </div>
              <div className="practical-info">
                <FaRegClock className="information-icon" />
                <div className="more-practical">
                  <strong>Време за посещение</strong>
                  <p>{placeDetails.practical_info?.time}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="gallery-holder">
        <h2>
          Галерия <hr className="gold-line" />
        </h2>
        <div className="gallery-grid">
          {placeDetails.gallery && placeDetails.gallery.length > 0
            ? placeDetails.gallery.map((img, index) => {
                return <img src={img} className="gallery-img" key={index} />;
              })
            : ""}
        </div>
      </div>

      <div className="location-container">
        <div className="info-header mg">
          <h3>
            Местоположение <hr className="gold-line" />
          </h3>
          <span className="eyebrow">БЛИЗО ДО ПРИРОДАТА</span>
        </div>
        <div className="location-grid">
          <div className="location-map">
            {placeDetails.coordinates && (
              <Map
                placesData={[
                  {
                    coordinates: placeDetails.coordinates,
                    place_name: placeDetails.name,
                  },
                ]}
              />
            )}
          </div>
          <div className="to-map">
            <span className="map-location-icon">
              <IoLocation />
            </span>
            <Link to="/map"> Виж на карта </Link>
            <span className="map-arrow-icon">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="location-text">
          <div className="info-header mg">
            <h2>Как да стигнете</h2>
            <span className="eyebrow">ПЪТЯТ Е ЧАСТ ОТ ПРИКЛЮЧЕНИЕТО </span>
          </div>

          <div className="access-info">
            <div className="practical-info color">
              <IoCarOutline className="information-icon size" />
              <div>
                <h3>С автомобил</h3>
                <p>{placeDetails.access?.car}</p>
              </div>
            </div>
            <div className="practical-info color">
              <span className="information-icon size">
                <BsPersonWalking />
              </span>
              <div>
                <h3>Пеша</h3>
                <p>{placeDetails.access?.onFoot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="end-motto">
        <hr className="gold-line" />
        <span className="motto-span">
          МАЛКИ СТЪПКИ &nbsp; • &nbsp; ПО-ГОЛЯМА ВРЪЗКА С ПРИРОДАТА
        </span>
        <hr className="gold-line" />
      </p>
    </section>
  );
}
