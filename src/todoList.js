import React, { useState } from 'react';
import Todo from './todo';
import TodoForm from './todoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        const newTodos = [todo, ...todos]
        console.log(...todos);

        setTodos(newTodos)
        
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr)
    }
    


    return (

        <div>
            <h1> Ajouter des choses  </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList