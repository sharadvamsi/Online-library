import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
        <div className="not-found">
            <h1>OOPS !!! 404 Not Found</h1>
            <p>The page you are looking for doesnot exist. Please Check the Path</p>
            <button><Link to="/">Back to Home Page</Link></button>        
        </div>
    )
}

export default NotFound;