import { Route, Routes, Link } from "react-router-dom";
import { BookList } from "./Components/BookList";
import { Home } from "./Components/Home";
import { Book } from "./Components/Book";
import { Authors } from "./Components/Authors";
import { NotFound } from "./Components/NotFound";
import { BookLayout } from "./Components/BookLayout";


function App() {
return (
<>
    <Routes location="/bookList">  {/*If we harcode the location in the paretn rout the child rout will show everywher on che /bookList child routs otherwise it will show only on the child of this route */}
      <Route path="/bookList" element={ <h1>exmp: Side Bar</h1>} />
    </Routes>
 <nav>
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/bookList" >BookList</Link></li>
  </ul>
 </nav>
  <Routes>
    
    <Route path="/" element={<Home />} /> {/* At home the book layout it doesnt show becaues Home is not a child of the BookLayout */}
    
    <Route path="/bookList" element={<BookLayout />} >          {/* So this BookLayout it will be shown in all child components because it is in the parent component, As well we can let the path of is the child components are diffrent paths, they dont have to share the path in order to share the parent component */ }
        <Route index element={<BookList />} />
        <Route path=":id" element={ <Book />} />
        <Route path="authors" element={ <Authors />} />
    </Route>

    <Route path="*" element={<NotFound />} /> 
   
   
   
   
    {/* <Route path="/booklist" element={ <BookList />} />
    <Route path="/booklist/:id" element={ <Book />} />
    <Route path="/booklist/authors" element={ <Authors />} /> */}
    
  </Routes>
</>
  )
  
}
export default App;
