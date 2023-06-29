import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";
import { BookList } from "./Components/BookList";
import { Home } from "./Components/Home";
import { Book } from "./Components/Book";
import { Authors } from "./Components/Authors";
import { NotFound } from "./Components/NotFound";
import { BookLayout } from "./Components/BookLayout";
import { BookRoutes } from "./Components/BookRoutes";
import "./App.css";

function App() {

 const location = useLocation();
 console.log(location)
 //this is a way how to pass information between diffrent components passing state, the url and nothing else gets affected
return (
<>
    {/* <Routes location="/bookList">  {/*If we harcode the location in the paretn rout the child rout will show everywher on every root otherwise it will show only on the child of this route */}
  {/* <Route path="/bookList" element={ <h1>Extra Content</h1>} /> */}
{/* </Routes> */}


 <nav>
  <ul>
    <li><Link to="/"  replace>Home</Link></li> {/* replace, it goes back 2 pages, reloadDocument - when click it reload the contect not only show the router,state- */}
    <li><Link to="/bookList" >BookList</Link></li>
  </ul>
 </nav>

    <NavLink to='/' state="hi" style={{display: "block",margin: 20}}>Home 1 </NavLink>
    <NavLink to='/bookList'  style={{display: "block",margin: 20}}>BookList 2 </NavLink>


  <Routes>
      <Route path="/" element={<Home />} />                         {/* At home the book layout it doesnt show becaues Home is not a child of the BookLayout */}
      <Route path="/bookList/*" element={<BookRoutes />}  />          {/* So this BookLayout it will be shown in all child components because it is in the parent component, As well we can let the path of is the child components are diffrent paths, they dont have to share the path in order to share the parent component */ }
      <Route path="*" element={<NotFound />} /> 
  </Routes>
   
   
    {/* <Route path="/booklist" element={ <BookList />} />
    <Route path="/booklist/:id" element={ <Book />} />
    <Route path="/booklist/authors" element={ <Authors />} /> */}
    
  
</>
  )
  
}
export default App;
