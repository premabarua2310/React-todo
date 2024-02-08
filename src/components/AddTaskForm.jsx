// AddTaskForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS

const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask({ id: Date.now(), text, completed: false, priority });
        setText('');
        setPriority('low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='task-input'
                placeholder="Enter task..."
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className={`task-input bg-${priority}`} // Bootstrap utility class to set background color
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" className="button-add">Add Task</button> {/* Bootstrap primary button */}
        </form>
    );
};

export default AddTaskForm;
