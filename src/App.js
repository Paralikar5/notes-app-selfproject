import "./App.css";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import TodoItems from "./Components/TodoItems";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todoitem) => {
    console.log("Hey, I'm onDelete of todoitem", todoitem);

    setTodos((prevTodos) =>
      prevTodos.filter((e) => {
        return e.sno !== todoitem.sno;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Navbar title="Todo List App" searchbar={true} />
      <AddTodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
