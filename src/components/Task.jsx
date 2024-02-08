import React, { useState } from 'react';

const Task = ({ task, editTask, toggleCompletion, deleteTask }) => {
  const { id, text, completed, priority } = task;
  const [editedText, setEditedText] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTask(id, editedText);
    setEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{editing ? <input className='list' value={editedText} onChange={handleChange} /> : text}</span>
      <div className="">
        <button className='button-complete task-button'
        onClick={() => toggleCompletion(id)}>
          {completed ? 'Undo' : 'Done'}
        </button>
        <button className='button-edit task-button'
        onClick={handleEdit}>Edit</button>
        <button className='button-delete task-button'
        onClick={() => deleteTask(id)}>Delete</button>
        {editing && <button onClick={handleSave}>Save</button>}
      </div>
      <span className={`priority ${priority}`}>{priority}</span>
    </div>
  );
};

export default Task;
