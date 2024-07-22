import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivesButton from "./ArchivesButton";
import NotesItemsBody from "./NotesItemsBody";

const NotesItem = ({ note, onDelete, onArchive }) => {
  const handleArchiveClick = () => onArchive(note.id);
  const handleDeleteClick = () => onDelete(note.id);

  return (
    <div className="notes-items">
      <NotesItemsBody
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
      />

      <div className="notes-items-action">
        <ArchivesButton
          archived={note.archived}
          onClick={handleArchiveClick}
        />
        <DeleteButton onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default NotesItem;
