import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button 
      className="delete-button" 
      onClick={onClick}
      type="button"
    >
      Remove
    </button>
  );
};

export default DeleteButton;
