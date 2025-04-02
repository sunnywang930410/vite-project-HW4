import Header from '../components/Header'
import Footer from '../components/Footer/index'
import { useParams } from 'react-router'
import books from '../json/books.json'
import BookDetail from "../components/BookDetail"

function Book(){
    // 在Book⾴⾯利⽤useParams接收參數bookId
    const { bookId } = useParams(); 
    // 在books.json陣列中尋找符合ID的資料設定為book
    const book = books.find(
        (x) => x.ID === Number(bookId)
    );

    return(
        <div className="container mx-auto main-layout bg-linear-to-t bg-sky-950">
         <Header
            title="Book Detail"
            slogan="Check Out the Book!"
         />
         {/* 將按下該對應的book內容(利用id判斷)傳入BookDetail中book變數 */}
         <BookDetail book = {book} className = "content"/>
         <Footer className="footer" />
      </div>
    )
}

export default Book