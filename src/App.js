import { Route, Routes, Link } from "react-router-dom";
import { BookList } from "./Components/BookList";
import { Home } from "./Components/Home";
import { Book } from "./Components/Book";
import { Authors } from "./Components/Authors";
import { NotFound } from "./Components/NotFound";


function App() {
return (
<>
 <nav>
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/bookList" >BookList</Link></li>
  </ul>
 </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bookList">
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
