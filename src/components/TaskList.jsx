// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, editTask, toggleCompletion, deleteTask }) => {
    return (
        <div className="d-block">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    editTask={editTask}
                    toggleCompletion={toggleCompletion}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
