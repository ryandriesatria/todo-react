import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, handleChange, deleteTodo, updateTodo, isEditing }) {
    //const [checkedState, setCheckedState] = useState();

    return todos.map((todo, index) => (
        <div key={todo.id}>
            <div className='row'>
                <div
                    className={
                        todo.isDone
                            ? "col row todo-item isDone"
                            : "col row todo-item"
                    }
                    onClick={() => handleChange(todo.id)}
                >
                    <div className='col-auto checker'>
                        <span className=''>
                            <input
                                key={todo.id}
                                className='form-check-input btn-outline-check'
                                type='checkbox'
                                checked={todo.isDone}
                                readOnly
                            />
                        </span>
                    </div>
                    <span className='col todo-text'>{todo.text}</span>
                </div>
                <div className='col-auto button'>
                    <button
                        className='col-auto btn btn-primary btn-xs'
                        onClick={() => {
                            isEditing(todo.id);
                        }}
                    >
                        <i className='fas fa-pen fa-sm'></i>
                    </button>

                    <button
                        className='col-auto col-offset-2 btn btn-danger btn-xs'
                        onClick={() => {
                            deleteTodo(todo.id);
                        }}
                    >
                        <i className='fas fa-trash-alt fa-sm'></i>
                    </button>
                </div>
            </div>
            <div className={todo.isEditing ? "edit-form show" : "edit-form"}>
                <TodoForm edit={true} todo={todo} onSubmit={updateTodo} />
            </div>
        </div>
    ));
}
export default Todo;
