// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
