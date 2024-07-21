import React, { useState } from "react";

const NotesInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value.slice(0, 50));
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle(""); 
    setBody("");  
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <span>Remaining Characters: {50 - title.length}</span>
      <input
        type="text"
        className="note-form-title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        className="note-form-body"
        placeholder="The description you recorded..."
        value={body}
        onChange={handleBodyChange}
        required
      />
      <button type="submit">Create Note</button>
    </form>
  );
};

export default NotesInput;
