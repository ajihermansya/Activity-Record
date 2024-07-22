import React from "react";
import NotesItem from "./NotesItem";

const NotesLists = ({ notes, onDelete, onArchive }) => {
  const renderEmptyMessage = () => (
    <div className="notes-lists-empty">
      <p>No records!</p>
    </div>
  );

  const renderNotes = () => {
    const sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    return (
      <div className="notes-lists">
        {sortedNotes.map((note) => (
          <NotesItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    );
  };

  return notes.length === 0 ? renderEmptyMessage() : renderNotes();
};

export default NotesLists;
