import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, pages, onPageChange }) {

  return (
    <nav aria-label="pagination" className="pagination-container">
      <ul className="pagination">
        <li>
          <a href="" aria-label="Previous page" aria-disabled={currentPage === 1} onClick={(e) => {
            e.preventDefault();
            if(currentPage > 1) {
              onPageChange(currentPage - 1);
            }
          }}>
            <span aria-hidden="true">&laquo;</span>
            <span className="visuallyhidden">previous set of pages</span>
          </a>
        </li>
        {pages.map((page) => (
            <li key={page}>
              <a
                href={`?page=${page}`}
                id="page"
                aria-current={currentPage === page ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                <span className="visuallyhidden">page </span>
                {page}
              </a>
            </li>
          ))}
        <li>
          <a href="" aria-label="Next page" aria-disabled={currentPage === totalPages} onClick={(e) => {
            e.preventDefault();
            if(currentPage < totalPages) {
              onPageChange(currentPage + 1);
            }
          }}>
            <span className="visuallyhidden">next set of pages</span>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
