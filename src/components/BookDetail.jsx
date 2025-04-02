import AddToCart from "./AddToCart";

function BookDetail({ book }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={book.title}
                    className="w-full h-96 object-cover object-center rounded-md"
                    src={book.cover}
                />
            </div>
            <div className="lg:col-span-14 px-4">
                <h1 className="text-white text-2xl font-bold mb-2">{book.title}</h1>
                <h2 className="text-blue-200 opacity-80 mb-1 text-lg">{book.author}</h2>
                <p className="italic text-white opacity-60 text-base mb-4">{book.summary}</p>
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">US${book.price}.00</p>
                    <AddToCart />
                </div>
            </div>
        </div>
    )
}

export default BookDetail;