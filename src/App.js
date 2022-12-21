import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BookDetails from "./Components/BookDetails";
import BookList from "./Components/BookList";
import Favourite from "./Components/Favourite";
import { Routes, Route } from "react-router-dom";
import { BookContext } from "./Components/BookContext";
import { useState } from "react";

function App() {
  const [fav, setFav] = useState([]);

  const AddToFav = (book) => {
    const oldFav = [...fav];
    const newFav = oldFav.concat(book);
    setFav(newFav);
  };

  const removeFromFav = (id) => {
    const oldFav = [...fav];
    const newFav = oldFav.filter((book) => book.id !== id);
    setFav(newFav);
  };
  console.log(fav);
  return (
    <div>
      <BookContext.Provider value={{ fav, AddToFav, removeFromFav }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Footer />
      </BookContext.Provider>
    </div>
  );
}

export default App;
