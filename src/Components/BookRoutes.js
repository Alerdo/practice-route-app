import { Routes, Route } from "react-router-dom"
import { BookList } from "./BookList";
import { Book } from "./Book";
import { Authors } from "./Authors";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
    return (
        <>
 
    <Routes  >
        <Route element={<BookLayout />} >
            <Route index element={<BookList />} />
            <Route path=":id" element={ <Book />} />
            <Route path="authors" element={ <Authors />} />
        </Route>
    </Routes>
    </>
    )
}