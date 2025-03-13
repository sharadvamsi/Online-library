import { Link } from "react-router-dom";

const BookItem = (props)=>{
    const {id,title,cover_image,author} = props.book;
    return(
        <div className="book-card">
            <img src={cover_image} alt=""  width="100%" height="200px"/>
            <div className="book-content-card">
            <h2>{title}</h2>
            <p>by {author}</p>
            <button><Link to={`/book-details/${id}`}>View Details</Link></button>
            </div>
            
        </div>
    )
}
export default BookItem