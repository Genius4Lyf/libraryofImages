import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-book-context";

function BookShow ({ book }) {
    const [showEdit,  setShowEdit] = useState(false)

    const { deleteBookById } = useBookContext()

    const handleDeleteClick = () => {
        deleteBookById(book.id)
        // edit this function on your kittens app to have a add like button and increase the number
        // of likes when you click a kittens card
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    let imageBackground = <img src={book.imageApi} alt="books" style={{width:'300px', height:'200px'}}/>

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return(
        <div className="book-show">
            {imageBackground}  
            <div>{content}</div>
            <button className="edit" onSubmit={handleSubmit} onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>  
    )   
    //  task: try to fetch the images from unsplash images and display
}

export default BookShow;