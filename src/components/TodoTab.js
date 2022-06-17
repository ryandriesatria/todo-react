import React from "react";

function TodoTab({ handleChangeTab }) {
    return (
        <div className='row'>
            <ul className='nav nav-pills todo-nav'>
                <li role='presentation' className='nav-item all-task'>
                    <button
                        className='nav-link'
                        onClick={() => {
                            handleChangeTab("all");
                        }}
                    >
                        All
                    </button>
                </li>
                <li role='presentation' className='nav-item active-task'>
                    <button
                        className='nav-link'
                        onClick={() => {
                            handleChangeTab("active");
                        }}
                    >
                        Active
                    </button>
                </li>
                <li role='presentation' className='nav-item completed-task'>
                    <button
                        className='nav-link'
                        onClick={() => {
                            handleChangeTab("completed");
                        }}
                    >
                        Completed
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default TodoTab;
