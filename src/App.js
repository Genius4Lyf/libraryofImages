import './index.css'
import { useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'
import useBookContext from './hooks/use-book-context';

function App() {
    const {fetchBooks} = useBookContext();

    useEffect(() =>{
        fetchBooks()
    }, [fetchBooks]);
    
    return(
        <div className='app'>
            <h1>Library Elf</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

export default App;