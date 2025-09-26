import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.defaultProps = {
  newTask: '',
};
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
export default Form;
