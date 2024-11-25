import '../App.css';

const Pagination = ({currentPage, totalPages, handelPageChange, pageNumbers, employees}) => {

    return <>
    <div className="setPagination">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" key={employees.Id}>
                    <button className="page-link"
                    disabled={currentPage === 1}
                    onClick={() =>
                        handelPageChange(currentPage - 1)
                    }
                    >Previous</button>
                </li>
                {/* <li className="page-item"> */}
                    {pageNumbers.map((pageNumber)=>(
                         <li className="page-item" key={employees.Id}>
                         <button className={`page-link ${currentPage === pageNumber ? 'text-danger': ""}`}
                         key={pageNumber}
                         onClick={() => handelPageChange(pageNumber)}
                         >
                        {pageNumber}
                         </button>
                         </li>
                    ))}
                {/* </li> */}
                <li className="page-item" key={employees.Id}>
                    <button className="page-link" 
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        handelPageChange(currentPage+1)
                    }
                    >Next</button>
                </li>
            </ul>
        </nav>
        </div>
    </>

}

export default Pagination;