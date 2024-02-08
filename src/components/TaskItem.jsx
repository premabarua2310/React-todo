import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion, editTask }) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleToggleCompletion = () => {
        toggleTaskCompletion(task.id);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, editedText);
        setEditing(false);
    };

    const handleChange = (e) => {
        setEditedText(e.target.value);
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggleCompletion}
            />
            {editing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={handleChange}
                />
            ) : (
                <span>{task.text}</span>
            )}
            {editing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
