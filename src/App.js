import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <div className="app-wrapper">
                <TodoList />
            </div>
        </div>
    )
}

export default App
