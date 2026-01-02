"use client";

import { useState } from "react";

// Todoの型定義
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// サンプルのTodoデータ
const initialTodos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a Next.js app", completed: true },
  { id: 3, title: "Explore GitHub Copilot", completed: true },
];

// Next.jsのページコンポーネント
export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: Todo = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo(""); // 入力欄をクリア
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={{ ...styles.addButton, backgroundColor: "#28a745" }}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span style={todo.completed ? styles.completed : styles.title}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center" as const,
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  title: {
    marginLeft: "10px",
    color: "#555",
  },
  completed: {
    marginLeft: "10px",
    color: "#aaa",
    textDecoration: "line-through",
  },
};