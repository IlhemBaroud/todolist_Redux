import React from 'react'
import { deleteTodo, toggleComplete } from '../redux/todoSlice'
import { useDispatch } from 'react-redux' 
import 'bootstrap/dist/css/bootstrap.min.css'

export const TodoItem = ({id, title,description, completed}) => {
    
    const dispatch = useDispatch();

    const handleCheck = () => {
        
        dispatch(toggleComplete({id:id, 
                                 completed:!completed
                                }))
    }

    const handleClick = () => {
        dispatch(deleteTodo({
            id: id
        })
        )
    }
  
    return (
        <div className="todo-container">
            <div style={{width:"300px"}}>
            <input type="checkbox" checked={completed}
            onChange={handleCheck} />
            {title}
            </div>
            <button className="btn btn-danger btn-delete" onClick={handleClick}>Delete</button>
        </div>
    )
}
