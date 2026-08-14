import { useState } from "react";

function TodoList() {

const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: false }
]);

const [inputValue, setInputValue] = useState("");

const addTodo = () => {
  if (!inputValue.trim()) return;

  setTodos([
    ...todos,
    {
      id: Date.now(),
      text: inputValue,
      completed: false,
    },
  ]);

  setInputValue("");
};

const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

  return (
    <div>
      <h2>Todo List</h2>
       
       <input
  type="text"
  placeholder="Enter a new task"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>

<button onClick={addTodo}>
  Add Todo
</button>  

     <ul>
  {todos.map((todo) => (
    <li key={todo.id}>

        <span
    onClick={() => toggleTodo(todo.id)}
    style={{
      textDecoration: todo.completed ? "line-through" : "none",
      cursor: "pointer",
    }}
  >
    {todo.text}
  </span>

      <button onClick ={ ()=> deleteTodo(todo.id)}>
       Delete
      </button>
  
  </li>
  ))}
</ul>

    </div>
  );
}

export default TodoList;
