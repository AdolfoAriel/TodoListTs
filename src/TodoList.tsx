import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Pass my interview with  Zenfeat ", completed: false },
    { id: 3, text: "Get my job in  Zenfeat  ", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="main-container">
      <h1 className="title">Todo List </h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
           
            <button className="button-delete" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add your items"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button className="button-add" onClick={handleClick}>Add</button>
    </div>
  );
};
