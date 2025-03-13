import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateFilteredBooks } from "../utils/bookSlice";
import BookItem from "./BookItem";
import { useState } from "react";

const BrowseBooks = ()=>{
    const books = useSelector((store)=>store.book.allBooks);
    const filteredBooks = useSelector((store)=>store.book.filteredBooks);
    const genreList = useSelector((store)=>store.book.genreList);

    const [inputValue,setInputValue] = useState('');
    
    const {category} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleBookList = (e)=>{
        const data = books.filter((book)=>book.genre.includes(e.target.value))
        dispatch(updateFilteredBooks(data));
        navigate(`/books/${e.target.value}`);
        
        
    }

    const handleInput = (e)=>{
        const data = books.filter(book=>book.title.toLowerCase().includes(e.target.value.toLowerCase())  || book.author.toLowerCase().includes(e.target.value.toLowerCase()) )
        console.log("data",data)
        setInputValue(e.target.value)
        dispatch(updateFilteredBooks(data));
        
    }
    console.log("category",category);
    
    console.log("!category",!category);
    console.log("inputvalue",inputValue === "");
    
    
    return (
      <>
        <div className="home-main-container">
          <div className="filter-container">
            <div className="filter-genre">
              <h2>Filter by Genre</h2>
              <select
                name="genres"
                id="genre"
                className="genre-container"
                onChange={handleBookList}
              >
                {genreList.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-genre">
              <h2>Filter by title or author</h2>
              <input
                placeholder="Enter title or author"
                type="text"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="popular-container">
            {!category
              ? (inputValue === ""
                ? books.map((book) => <BookItem key={book.id} book={book} />)
                : filteredBooks.map((book) => (
                    <BookItem key={book.id} book={book} />)
                  ))
              : filteredBooks.map((book) => (
                <BookItem key={book.id} book={book} />)
              )}
          </div>
        </div>
      </>
    );
}
export default BrowseBooks