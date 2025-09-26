import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Task.css';

function Task({ tasks, handleEdit, handleDelete, handleToggleCompleted }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={index} className={task.isCompleted ? 'completed' : ''}>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleCompleted(index)}
            />
            <span className="task-text">{task.text}</span>
          </div>

          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
};

export default Task;
