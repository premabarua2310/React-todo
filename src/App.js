import React from 'react';
import { Routes, Route } from "react-router-dom";
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoList />}>
            </Route>
        </Routes>

    )
}

export default App
