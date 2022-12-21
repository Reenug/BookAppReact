import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { BookContext } from "./BookContext";
import "../App.css";

const BookList = () => {
  const  context = useContext(BookContext)
  const [books, setBooks] = useState([]);

  const {fav, AddToFav,removeFromFav} = context
 

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=100")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      });
  }, []);

  const favChecker = (id) => {
    const bool = fav.some((book) =>
      book.id === id)
      return bool
  }

  

  return (
    <div className="container">
      {books.map((book) => {
        return (
          <div className="book" key={book.id}>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>

              {
                favChecker(book.id) ?  <button onClick={()=> removeFromFav(book.id)}>Remove From Favorites</button> :<button onClick={() => AddToFav(book)}>Add to Favorites</button>
              }
             
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default BookList;
