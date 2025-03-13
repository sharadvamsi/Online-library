import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <div>
            <nav className="nav-container">
                <li><Link to = "/">Home</Link></li>
                <li><Link to={`/books`}>Browse Books</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
            </nav>

        </div>
    )
}

export default Header;