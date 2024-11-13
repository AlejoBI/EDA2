import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los Challenges',
        done: false,
    },
    {
        id: new Date().getTime() + 1,
        description: 'Hacer el examen',
        done: true,
    }
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        todoDone: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, todoDone } = todoSlice.actions;
export default todoSlice.reducer;
