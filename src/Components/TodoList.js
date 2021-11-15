import React from 'react'
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';


export const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    return (
        <div className="align-todos">
            {todos.map((item, key) =>
                <TodoItem key={item.id} id={item.id} title={item.title} 
                description={item.description} completed={item.completed} />
                )
            }
        </div>
    )
}

export default TodoList;
