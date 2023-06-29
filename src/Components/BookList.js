import { Link } from "react-router-dom";

export function BookList() {
    
  return (
    
    <>
    <h1>Book List</h1>
      <Link to="/bookList/1">Book 1</Link>
      <Link to="/bookList/2">Book 2</Link>
      <Link to="/bookList/authors">Authors</Link>
    </>
  );
}
