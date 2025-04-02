import BookList from '../components/BookList'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home(){
    return(
        <div className="container mx-auto main-layout bg-sky-950 min-h-screen">
            <Header
                title = "Welcome to My Bookstore"
                slogan = "The best place to buy your favorite books!"
            />
            <BookList className = "content"/>
            <Footer className = "footer" />
        </div>
    )
}

export default Home