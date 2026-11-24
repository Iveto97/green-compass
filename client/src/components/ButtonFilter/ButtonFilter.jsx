import "./ButtonFilter.css";

export default function ButtonFilter({ value, onClick, options }) {
  const optionKeys = Object.keys(options);

  return (
    <div className="blog-categories">
      <div className="blog-category">
        {optionKeys.map((key) => (
          <button
            key={key}
            className="blog-btn"
            onClick={() => onClick({ ...value, category: [key] })}
          >
            {options[key]}
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
