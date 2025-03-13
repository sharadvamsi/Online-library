import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header";
import { Provider } from "react-redux";
import bookStore from './utils/bookStore';
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import AddBook from "./components/AddBook";

const App = ()=>{
 return(
  <BrowserRouter>
  <Provider store={bookStore}>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/books/:category?" element={<BrowseBooks/>}/>
    <Route path="/book-details/:id" element={<BookDetails/>}/>
    <Route path="/add-book" element = {<AddBook/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </Provider>
  </BrowserRouter>
 )
}

export default App;