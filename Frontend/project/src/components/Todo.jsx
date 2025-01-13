import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);


  const data = () => {
    setTodolist([...todoList, todo]);
    console.log(todo);
  };

  const removeTodo=()=>{
     const updateTodo=[...todoList]
     updateTodo.pop()
     setTodolist(updateTodo)
  }
  
  return <>
      <div className="grid">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Input"
        />
        <button onClick={data}>Add</button>
      </div>

      <ul>
        {todoList.map((item,index) => (
          <li key={index}>
            {index +" "+ item}
            <button onClick={removeTodo}>Delete</button>
          </li> 
        ))}
      </ul>
    </>
};

export default Todo;