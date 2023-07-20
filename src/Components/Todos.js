import React from "react";
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-2">Todo List</h3>
      {props.todos.length === 0 ? "No todos to display.": 
        props.todos.map((todoitem) => (
            <TodoItems
              todoitem={todoitem}
              key={todoitem.sno}
              onDelete={props.onDelete}
            />
          ))}
    </div>
  );
}
