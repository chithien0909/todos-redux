import React from 'react';
import './App.css';
import VisibleTodoList from './containers/VisibleTodoList';
function App() {
  return (
    <div className="App">
      <h2 className="title">TodoList App</h2>
      <VisibleTodoList/>
    </div>
  );
}

export default App;
