import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import  'bootstrap/dist/css/bootstrap.min.css'
import {Form} from 'react-bootstrap'
export const AddTodoForm = () => {

    const dispatch = useDispatch();

    const [valueT, setValueT] = useState('');
    const [valueD, setValueD] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title: valueT,
            description: valueD
        }
        ));
    }

            
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" placeholder="Task title..." 
                value={valueT} onChange = {(e) => setValueT(e.target.value)} 
                style={{marginBottom:"10px"}}/>
                
                <label>Description</label>
                <input className="input" type="text" placeholder="Task description..." 
                 value={valueD} onChange = {(e) => setValueD(e.target.value)}/>
                <input className="btn-add btn btn-primary" type="submit" value="Add task" />
            </Form>

        </div>
    )
}
