
import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom"

export function BookLayout() {

  const [searchParams , setSearchParams] = useSearchParams({n: 3})
  const number =  searchParams.get("n")
//Use params hook helps us get the param of the current URL
//SearchParams.get() brings the value as { n: value}
//this way we can se the value of current par to the input nr 
    return (
        <>
        
          <Link to="/bookList/1">Book 1</Link>
          <br />
          <Link to="/bookList/2">Book 2</Link>
          <br />
          <Link to={`/bookList/${number}`} >Book {number}</Link>
          <br />
          <Link to="/bookList/authors">Authors</Link>
          <Outlet context={{name: "alerdo"}} /> {/*This is the render of the child Router of the BookLayout router in app.js , wherever the path is, it renders the respective route */}
          <input type="number"
                  value={number} 
                  onChange={e => setSearchParams({n: e.target.value})} />
        </>
      
    )
}