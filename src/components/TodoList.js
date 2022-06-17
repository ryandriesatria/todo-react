import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoTab from "./TodoTab";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [tab, setTab] = useState("all");

    const addTodo = (todo) => {
        if (todo.text === "") {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const handleCheckboxChange = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const isEditing = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isEditing: !todo.isEditing };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const updateTodo = (newTodo) => {
        if (newTodo.text === "") {
            return;
        }
        const newTodos = todos.map((todo) => {
            if (todo.id === newTodo.id) {
                return {
                    ...todo,
                    text: newTodo.text,
                    isEditing: !todo.isEditing,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleChangeTab = (val) => {
        setTab(val);
    };

    const selectedTodos = () => {
        if (tab === "active") {
            return todos.filter((todo) => todo.isDone === false);
        } else if (tab === "completed") {
            return todos.filter((todo) => todo.isDone === true);
        }
        return todos;
    };

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <TodoTab handleChangeTab={handleChangeTab} />
            <div className='list-wrapper'>
                <ul className='d-flex flex-column-reverse todo-list' />
                <Todo
                    todos={selectedTodos()}
                    handleChange={handleCheckboxChange}
                    deleteTodo={deleteTodo}
                    isEditing={isEditing}
                    updateTodo={updateTodo}
                />
            </div>
        </div>
    );
}

export default TodoList;
