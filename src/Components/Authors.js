import { useOutletContext } from "react-router-dom";

export function Authors() {
    const obj = useOutletContext();
  return (
    
    <>
    <h1>Authors</h1>
    <h3>This is the contex of the outlet: {obj.name}</h3>
     
    </>
  );
}
