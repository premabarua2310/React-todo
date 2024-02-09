import React, { useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaUndo } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";
import "./Task.css";


const Task = ({ task, editTask, toggleCompletion, deleteTask }) => {
  const { id, text, completed, priority } = task;
  const [editedText, setEditedText] = useState(text);
  const [editing, setEditing] = useState(false);

  //Edit button handle
  const handleEdit = () => {
    setEditing(true);
  };

  //Update button handle
  const handleUpdate = () => {
    editTask(id, editedText);
    setEditing(false);
  };

  //Task priority color handle
  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={` ${completed ? 'completed' : ''}`}>
      {/*----------------- Task input field start -------------------*/}
      <div>
        <li className="list-item">
          {editing ? (
            <input className='list' value={editedText} onChange={handleChange} />
          ) : (
            <span style={{ color: priority === 'low' ? 'greenyellow' : priority === 'medium' ? 'orange' : 'red' }}>
              {text}
            </span>
          )}
        </li>
        <div>
          {/*----------------- Task input field end -------------------*/}

          {/*----------------- Task buttons start -------------------*/}
          <div className="buttons">
            <button className='button-complete' onClick={() => toggleCompletion(id)}>
              {completed ? <FaUndo className="icon" /> : <FaCheck className="icon" />}
              <span className="label"> {completed ? 'Undo' : 'Done'}</span>
            </button>
            <button className='button-edit' onClick={handleEdit}>
              <FaEdit className="icon" />
              <span className="label">Edit</span>
            </button>
            <button className='button-delete' onClick={() => deleteTask(id)}>
              <FaTrash className="icon" />
              <span className="label">Delete</span>
            </button>
            {editing && <button className='button-update' onClick={handleUpdate}>
              <GrUpdate className="icon" />
              <span className="label">Update</span>
            </button>}
          </div>
          {/*----------------- Task buttons end -------------------*/}
        </div>
      </div>
    </div >
  );
};

export default Task;
