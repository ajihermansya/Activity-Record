import React from "react";

function ArchiveButton({ archived, onClick }) {
  return (
    <button className="archives-button" onClick={onClick}>
      {archived ? "Move" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
