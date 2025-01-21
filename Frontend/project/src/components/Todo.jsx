import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  
  const addTodo = () => {
    setTodolist([...todoList, todo]);
  };

  const removeTodo=(index)=>{
    const updateTodo=[...todoList]
    updateTodo.splice(index, 1);
    setTodolist(updateTodo)
  }
  
  return (
    <>
     <div>
     <div className="bg-indigo-500	">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Input"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    
      <ul>
        {todoList.map((item,index) => (
          <li key={index}>
            {index +" "+ item}
            <button onClick={()=>removeTodo(index)}>Delete</button>
          </li> 
        ))}
      </ul>
     </div>
    </>
    )
};

export default Todo;