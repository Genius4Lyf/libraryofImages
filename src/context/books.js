import { createContext, useCallback, useState } from "react";
import axios from 'axios';
import searchImages from "../imageApi";

const BooksContext = createContext();

function Provider ({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback( async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }, [])

    const createBook = async (title) => {
        const imageApi = await searchImages(title)

        const response = await axios.post('http://localhost:3001/books', {
            title, imageApi,
        })
        
        const updatedBooks = [
            ...books,
            response.data
          ];
           setBooks(updatedBooks)
        }

    const deleteBookById = (id) => {
        axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter(book => {
            return book.id !== id
        })
        
        setBooks(updatedBooks)
    }

    // task: using the tik-ta-toe project, try adding and undo delete function to this app
    const editBookById = async (id, newTitle) => { 

        const imageApi = await searchImages(newTitle)
 
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle, imageApi
        })

        const updatedBooks = books.map((book) =>{
            if (book.id === id) {
                return {...books, ...response.data};
            }

            return book;
        })

        setBooks(updatedBooks)
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;