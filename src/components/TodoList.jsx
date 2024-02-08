// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

import './style.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    // Function to add a new task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Function to edit an existing task
    const editTask = (taskId, newText) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    // Function to mark a task as completed or incomplete
    const toggleCompletion = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="header">
            <h1>Todo List</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                editTask={editTask}
                toggleCompletion={toggleCompletion}
                deleteTask={deleteTask}
            />
            <div className="task-count">
                <p>Total Tasks: {tasks.length} </p>
                <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p> 
            </div>
        </div>
    );
};

export default TodoList;
