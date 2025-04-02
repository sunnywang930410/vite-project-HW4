import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import Book from "./pages/Book"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="books">
          <Route path="title/:titleName" element={<Home />} />
          <Route path="id/:bookId" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
