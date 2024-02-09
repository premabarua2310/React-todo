import React, { useState } from 'react';
import "./AddTaskForm.css";


const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('low');

    //Submit form handle
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask({ id: Date.now(), text, completed: false, priority });
        setText('');
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/*-------------- Task Form Start ------------------*/}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='task-input'
                placeholder="Enter task..."
                required
            />
            <select
                id="priority"
                value={priority}
                className={`task-select bg-${priority}`}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" className="button">Add Task</button>
            {/*-------------- Task Form end ------------------*/}
        </form>

    );
};

export default AddTaskForm;
