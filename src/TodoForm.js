// TodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';

const TodoForm = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', id: Date.now(), text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect()(TodoForm);
