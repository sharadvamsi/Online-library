import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateGenreList, updatePopularBooks } from "../utils/bookSlice";
import BookItem from "./BookItem";

const Home = ()=>{

    const popularBooks = useSelector((store)=>store.book.popularBooks);
    const genreList = useSelector((store)=>store.book.genreList);

    const dispatch = useDispatch();

    useEffect(()=>{
        const bookData = async()=>{
            const response = await fetch("https://www.freetestapi.com/api/v1/books");
            const data = await response.json();

            const genreList = [];
            data.map(book=>genreList.push(...book.genre))
            const uniqueGenreList = [...new Set(genreList)]
            
            dispatch(updatePopularBooks(data.slice(0,8)));
            dispatch(addBook(data));
            dispatch(updateGenreList(uniqueGenreList))
        }
        bookData();
    },[])
    return (
      <div className="home-main-container">
        <h1>Welcome To Online Library</h1>
        <h2>Book Categories</h2>
        <select name="genres" id="genre" className="genre-container">
          {genreList.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <h2>Popular books</h2>

        <div className="popular-container">
            {popularBooks.map(book=><BookItem key={book.id} book={book}/>)}
        </div>
      </div>
    );
}
export default Home;