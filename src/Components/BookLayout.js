

import { Link, Outlet } from "react-router-dom"

export function BookLayout() {
    return (
        <>
        
          <Link to="/bookList/1">Book 1</Link>
          <Link to="/bookList/2">Book 2</Link>
          <Link to="/bookList/authors">Authors</Link>
          <Outlet context={{name: "alerdo"}} /> {/*This is the render of the child Router of the BookLayout router in app.js , wherever the path is, it renders the respective route */}
        </>
    )
}