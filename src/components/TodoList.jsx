import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import "./TodoList.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedPriority, setSelectedPriority] = useState(''); // State for selected priority filter

    // Load tasks from local storage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Function to add a new task
    const addTask = (task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    // Function to edit an existing task
    const editTask = (taskId, newText) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Function to mark a task as completed or incomplete
    const toggleCompletion = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Function to handle priority filter selection
    const handlePriorityFilterChange = (priority) => {
        setSelectedPriority(priority);
    };

    // Filter tasks based on priority
    const filteredTasks = selectedPriority ? tasks.filter(task => task.priority === selectedPriority) : tasks;

    return (
        <div className='container'>
            <div className="app-wrapper">
                <div className="header">
                    <h1>Todo List</h1>
                    <AddTaskForm addTask={addTask} />
                    <TaskList
                        tasks={filteredTasks} // Pass filtered tasks to TaskList
                        editTask={editTask}
                        toggleCompletion={toggleCompletion}
                        deleteTask={deleteTask}
                    />
                    <div className="task-count">
                        <p>Total Tasks: {tasks.length} </p>
                        <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
                    </div>
                </div>

                {/*------------ Add Priority Filter Start --------------*/}
                <div className="priority-filter">
                    <label className='label' htmlFor="priority">Filter by Priority</label>
                    <select
                        id="priority"
                        value={selectedPriority}
                        className={`filter-input mb-15 bg-${selectedPriority}`}
                        onChange={(e) => handlePriorityFilterChange(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                {/*------------ Add Priority Filter End --------------*/}
            </div>
        </div>
    );
}

export default TodoList;
