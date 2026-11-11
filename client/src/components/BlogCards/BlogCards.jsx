import { Link } from "react-router-dom";

import "./BlogCards.css";

import { BsCalendar2Date } from "react-icons/bs";


const BlogCards = ({ id, title, category, content, created_at, image, excerpt }) => {

  const months = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];
  const date = new Date(created_at);

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <span className="blog-card-category">{category}</span>
        <img src={image} alt="" className="blog-img"/>
      </div>
      <div className="blog-card-content">
        <Link to={`/blog/${id}/details`} className="blog-card-link"><h3 className="blog-card-title">{title}</h3></Link>
        <span className="blog-card-date"><BsCalendar2Date />{date.getDate()}{' '}{months[date.getMonth()]}{' '}{date.getFullYear()}</span>
      </div>
    </div>
  );
};

export default BlogCards;
