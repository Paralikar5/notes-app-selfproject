import React from 'react';

export default function TodoItems({ todoitem, onDelete }) {
  return (
    <div className="container my-3">
      <h4>{todoitem.title}</h4>
      <p>{todoitem.desc}</p>
      <button className="btn btn-sm btn-dark " onClick={ () => {onDelete(todoitem)}} >Delete</button>
      <hr />
    </div>
  );
}
