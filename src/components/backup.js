import React , { useState }from 'react';
import logo from '../logo.svg';
import '.././App.css';
import TextBox from './textbox/simpleTextbox';
import Todo from './todo.js';
import TodoForm from './todoform';

function Backup(){
const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const testCallback = value => {
   console.log(value);
  };

  return (
    <div>
    <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
    <div className="App">
      <TextBox label="Test Label" defaultplaceholder='this is a default placeholder' callback={testCallback}/>
    </div>
    </div>
  );
}
export default Backup