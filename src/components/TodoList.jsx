// TodoList.js
import React, { useState } from 'react';
import { useTodoStore } from '../stores/useTodoStore';

export const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const { todos, addTodo, toggleTodo } = useTodoStore();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}