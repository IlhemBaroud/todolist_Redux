import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { filterDone, filterNotDone } from '../redux/todoSlice'

export const Filter = () => {

    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);


    const dispatch=useDispatch();
    
    const filterTodoDone = (e) => {
        setDone(e.target.value);
        done||dispatch(filterDone());
    }
    const filterTodoNotDone = (e) => {
        setNotDone(!e.target.value);
        notDone||dispatch(filterNotDone());
    }


    return (
        <div>
            <input type="checkbox" onChange={filterTodoDone} value={done}/>Done<br />
            <input type="checkbox" onChange={filterTodoNotDone} value={notDone}/>Not done
            


        </div>
    )
}
