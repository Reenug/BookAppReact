import { useContext } from "react";
import { BookContext } from "./BookContext";
import React from 'react'

  function Favourite() {
  const  context = useContext(BookContext)

  const {fav, AddToFav,removeFromFav} = context
  const favChecker = (id) => {
    const bool = fav.some((book) =>
      book.id === id)
      return bool
  }

  return (
    <div className="container">
      { fav.length > 0 ?fav.map((book) => {
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
      }) :
       (
        <h1>You need to Add</h1>
       )}

    </div>
  )
}

export default Favourite
