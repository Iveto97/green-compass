import { Link } from "react-router-dom";
import Details from "../Details/PlaceDetails";
import "./Cards.css";

export default function Card({id, name, region, description, image_url, category}) {
  
  return (
    <div className="card" key={id}>
      <div className="image-holder">
        <img src={image_url} alt={name} />

        <div className="card-type">
            <h4>{category.toUpperCase()}</h4>
        </div>
      </div>
      <div className="text-holder">
        <h2>{name}</h2>
        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="location-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {region}
        </div>
        <p className="information">
          {description}
        </p>
        <hr />
        <Link className="view-more" to={`/place/${id}/details`}>
          ВИЖТЕ ПОВЕЧЕ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 arrow-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
