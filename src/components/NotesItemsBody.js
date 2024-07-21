import React, { useEffect, useState } from "react";
import { showFormattedDate } from "../utils";

const NotesItemsBody = ({ title, body, createdAt }) => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFD1', '#FFA533'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  const titleStyle = {
    backgroundColor: bgColor,
    padding: '10px',
    borderRadius: '4px',
  };

  return (
    <div className="notes-items-body">
      <h3 className="notes-items-title" style={titleStyle}>
        {title}
      </h3>
      <span className="notes-items-date">{showFormattedDate(createdAt)}</span>
      <p className="notes-items-body-content">{body}</p>
    </div>
  );
};

export default NotesItemsBody;
