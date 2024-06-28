import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <span 
        onClick={toggleComplete} 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
