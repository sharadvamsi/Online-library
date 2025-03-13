import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { Link, useParams } from "react-router-dom";

const BookDetails = ()=>{
    const books = useSelector((store)=>store.book.allBooks);
    const {id} = useParams();
    const getBookDetails = books.filter(book=>book.id == id)
    const {title,author,description,cover_image} = getBookDetails[0];
    
    return(
        <>
         <div className="book-details-card">
            <img src={cover_image} alt=""  width="100%" height="300px"/>
            <div className="book-content-card">
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>{description}</p>
            <button><Link to={`/books`}>Browse Books</Link></button>
            </div>
            
        </div>
        
        
        </>
    )
}
export default BookDetails;