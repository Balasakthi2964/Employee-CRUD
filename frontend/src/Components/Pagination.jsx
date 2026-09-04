export default function Pagination({ page, setPage, totalPages }) {

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className="pagination">
            
            <button
                onClick={handlePrev}
                disabled={page === 1}
            >
                &lt;&lt;
            </button>
            
            {
                Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={page === pageNumber ? "active-page" : ""}
                    >
                        {pageNumber}
                    </button>
                ))
            }

            <button
                onClick={handleNext}
                disabled={page === totalPages}
            >
                &gt;&gt;
            </button>

        </div>
    );
}