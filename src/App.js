import "./App.css";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card card-white'>
                        <div className='card-body'>
                            <h1>Todo App</h1>
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
