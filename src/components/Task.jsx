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
      <div className="d-inline p-2 ">
        <div className="col mb-10">
          <span>{editing ? <input className='list form-control' value={editedText} onChange={handleChange} /> : text}</span>
        </div>
        <div className="col-auto">
          <div className="buttons">
            <button className='button-complete task-button'
              onClick={() => toggleCompletion(id)}>
              {completed ? 'Undo' : 'Done'}
            </button>
            <button className='button-edit task-buttony'
              onClick={handleEdit}>Edit</button>
            <button className='button-delete task-button'
              onClick={() => deleteTask(id)}>Delete</button>
            {editing && <button className='button-delete task-button'
              onClick={handleSave}>Save</button>}
          </div>
        </div>
      </div>
      <span className={`priority ${priority}`}>{priority}</span>
    </div>
  );
};

export default Task;
