import React, { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm(props) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e, todo) => {
        e.preventDefault();
        if (todo !== undefined) {
            props.onSubmit({
                id: todo.id,
                text: input,
                isDone: todo.isDone,
                isEditing: todo.isEditing,
            });
        } else {
            props.onSubmit({
                id: nanoid(8),
                text: input,
                isDone: false,
                isEditing: false,
            });
        }
        setInput("");
    };

    return (
        <div>
            {props.edit ? (
                <>
                    <form
                        onSubmit={(e) => handleSubmit(e, props.todo)}
                        className='row form-input'
                    >
                        <input
                            type='text'
                            className='col form-control update-task'
                            placeholder={props.todo.text}
                            value={input}
                            onClick={(e) => (e.target.value = props.todo.text)}
                            onChange={handleChange}
                        />
                        <button
                            onClick={(e) => handleSubmit(e, props.todo)}
                            className='col-auto btn btn-primary'
                        >
                            Update
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className='row form-input'>
                        <input
                            type='text'
                            className='col form-control add-task'
                            placeholder='New Task...'
                            value={input}
                            onChange={handleChange}
                        />
                        <button
                            onClick={handleSubmit}
                            className='col-auto btn btn-primary'
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}

export default TodoForm;
