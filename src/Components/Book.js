import { useParams } from "react-router-dom"

export function Book() {
   const {id} = useParams();
  //So use params is a powerful tool that
  // extracts the dynamic value of current parameter
  //return an object with id: and value the current parameter
    return (           
        <>
        <h1>Book Component</h1>
        <h4>This book Id is: {id}</h4>
        </>
    )
}