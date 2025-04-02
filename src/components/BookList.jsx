import books from "../json/books.json"
import BookItem from "./BookItem";

function BookList(){
    return(
        <div className="grid grid-cols-3 gap-4  max-w-6xl mx-auto px-4">
            {/* 利用map依序抓出BookItem中的資料 */}
            {books.map((book)=>(
                <BookItem key = {book.ID} book = {book} className="w-64 h-40"/>
            ))}
        </div>
    )
}

export default BookList;