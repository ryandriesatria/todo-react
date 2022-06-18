import React, { useState } from "react";

function TodoTab({ handleChangeTab }) {
    const [activeTab, setActiveTab] = useState("all");
    return (
        <div className='row'>
            <ul className='nav nav-tabs todo-nav'>
                <li role='presentation' className='nav-item all-task'>
                    <button
                        className={
                            activeTab === "all" ? "nav-link active" : "nav-link"
                        }
                        onClick={() => {
                            handleChangeTab("all");
                            setActiveTab("all");
                        }}
                    >
                        All
                    </button>
                </li>
                <li role='presentation' className='nav-item active-task'>
                    <button
                        className={
                            activeTab === "active"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            handleChangeTab("active");
                            setActiveTab("active");
                        }}
                    >
                        Active
                    </button>
                </li>
                <li role='presentation' className='nav-item completed-task'>
                    <button
                        className={
                            activeTab === "completed"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            handleChangeTab("completed");
                            setActiveTab("completed");
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
