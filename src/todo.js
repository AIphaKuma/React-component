import React, { useState } from 'react';

function Todo({ todos, removeTodo }) {


    return todos.map((todo, index) => (
        <div
            className='todo-row shadow p-3 mb-5 bg-white rounded border-top-0 rounded-3 my-4 '
            key={index}>
            <div key={todo.id} >
                <h4> {todo.text} </h4>
                <p> {todo.description} </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className=" col delete my-2">
                        <button type="button" className="btn btn-danger" onClick={() => removeTodo(todo.id)}>Supprimer</button>
                    </div>
                    <div className='col order-1 Checked my-3'>
                        <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="on" />
                        <label className="btn btn-outline-primary" for="btn-check-outlined">Done</label>
                    </div>
                </div>
            </div>
        </div>
    ))

}

export default Todo