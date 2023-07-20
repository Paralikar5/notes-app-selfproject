import React, { useState } from "react";

export default function AddTodo({addtodo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!title)
    {
        alert("Please enter Title")
    }
    else if(!desc)
    {
      alert("Please enter Description")
    }
    else{
      addtodo(title,desc);
      setTitle("");
      setDesc("");
    }

    

  };
  return (
    <div className="container my-3">
      <h3 className="text-center">Add a Todo :</h3>
      <br />
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-dark">
          Add Todo
        </button>
      </form>
    </div>
  );
}
