import React from "react";
import { FaSearch } from "react-icons/fa"; // Import ikon pencarian dari Font Awesome

function NotesSearch({ onSearch }) {
  return (
    <div className="notes-search-container">
      <div className="notes-search">
        <input
          type="text"
          placeholder="Search for notes..."
          onChange={onSearch}
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
}

export default NotesSearch;
