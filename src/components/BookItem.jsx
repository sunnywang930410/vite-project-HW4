import { Link } from "react-router";

function BookItem({book}) {
    return (
        <section className={`pt-4 px-3 lg:px-4 `}>
            <div className="border hover:bg-slate-500 border-indigo-200 rounded-lg overflow-hidden ">
                <Link to={`/books/id/${book.ID}`}>
                    <img className="w-full" src={book.cover} alt={book.title} />
                </Link>
                <div className=" p-4">
                    <h6 className="text-xl font-bold text-white mb-1">
                        {book.title}
                    </h6>
                    <h5 className="text-base font-medium text-blue-200 opacity-100 mb-1">
                        {book.author}
                    </h5>
                    <p className="italic text-cyan-50 opacity-80 mb-3">
                        {book.summary.length > 100 ? book.summary.substring(0, 100) + "..." : book.summary}
                    </p>

                    <div className="flex justify-between flex-wrap">
                        <Link to={`/books/id/${book.ID}`} className="no-underline text-cyan-300 flex font-bold items-center">
                            See More
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span className="text-purple-50 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                            {book.price}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookItem;