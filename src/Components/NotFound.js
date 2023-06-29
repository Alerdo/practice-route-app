import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
    //whenever we want to simply redirect the users if they write a path that dont exist we use <Navigate />
  const navigate = useNavigate() ///best way to redirect users 

  useEffect(()=> {
    setTimeout(()=> {
        navigate("/", {}) //if we put navigate(-1) it will take us back to the previous page
    }, 2000)
  }, [])


    return (
    <>
   <h1>Not found </h1>
   </>
  );
}
