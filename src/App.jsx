import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Book from "./pages/Book";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      {/* <HelmetProvider context={{}}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="books">
              <Route path="title/:titleName" element={<Home />} />
              <Route path="id/:bookId" element={<Book />} />
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </HelmetProvider> */}
    </Provider>
  )
}

export default App;
