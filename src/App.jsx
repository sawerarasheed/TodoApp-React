import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false, // Add completed state
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your todo..."
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </div>
    </div>
  );
};

export default App;