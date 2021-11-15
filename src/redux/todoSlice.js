import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
    {
        name: "todos", 
        initialState:[
            {id:1, title:"Kiera", description: "Take my dog to the vet.", completed:false},
            {id:2, title:"Doctor", description: "Go to the doctor",completed:true},
        
        ],
        reducers: {
            addTodo : (state, action) => {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    description: action.payload.description,                    
                    completed: false
                };
                state.push(newTodo);
            },

            toggleComplete : (state, action) => {
                const index = state.findIndex(item => item.id === action.payload.id);
                state[index].completed = action.payload.completed;
            },
            
            deleteTodo : (state, action) => {
                
                return state.filter((todo) => todo.id !==action.payload.id)
            },

            filterDone : (state, action) => {
                
                return state.filter((todo) => todo.completed === true)
            },

            filterNotDone : (state, action) => {
                
                return state.filter((todo) => todo.completed === false)
            }

        }
         
    }

)
    
export const {
    addTodo,
    toggleComplete,
    deleteTodo,
    filterDone,
    filterNotDone
    } = todoSlice.actions;
export default todoSlice.reducer;