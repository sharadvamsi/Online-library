import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBookList } from "../utils/bookSlice";
import { useNavigate } from 'react-router-dom';

const AddBook = ()=>{
    const books = useSelector((store)=>store.book.allBooks);
    const [bookData,setBookData] = useState({title:'',author:'',description:'',genre:''})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (e)=>{

            setBookData({...bookData,[e.target.name]:e.target.value})
            
    }

    const handleAdd = (e) => {
        e.preventDefault();
        
        if (!bookData.title || !bookData.author || !bookData.description || !bookData.genre) {
            alert("All fields are required!");
            return;
        }

        const id = books.length ? books[books.length - 1].id + 1 : 1;
        dispatch(updateBookList({ ...bookData, id }));
        navigate("/books");
    };
    return(
        <form className="form-container">

            <label >Title</label>
            <input type="text" placeholder="Enter title of the book" required  name="title" id="title" onChange={handleInput}/>
            <label >Author</label>
            <input type="text" placeholder="Enter name of the author" required  name="author"  onChange={handleInput} />
            <label >Description</label>
            <textarea type="text" placeholder="Enter Description" required name="description" id="description" rows={6} cols={30} onChange={handleInput}></textarea>
            <label >Genre</label>
            <input type="text" placeholder="Enter type of category" required  name="genre"  onChange={handleInput}/>

            <button type="submit" onClick={handleAdd}>ADD Book</button>

        </form>
    )
}

export default AddBook;