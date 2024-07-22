import React from "react";
import { getInitialData } from "./utils";
import NotesInput from "./components/NotesInput";
import NotesLists from "./components/NotesLists";
import NotesSearch from "./components/NotesSearch";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      notes: getInitialData(),
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
  }

  handleSearch(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  }

  handleAddNote({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  handleDeleteNote(id) {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: filteredNotes });
  }

  handleArchiveNote(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  }

  getFilteredNotes() {
    const { searchQuery, notes } = this.state;
    return notes
      .filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  render() {
    const activeNotes = this.getFilteredNotes().filter(
      (note) => !note.archived
    );
    const archivedNotes = this.getFilteredNotes().filter(
      (note) => note.archived
    );

    return (
      <div className="note-app">
      <div class="custom-container">
          <h2>Activity Record</h2>
        </div>
        
        <NotesSearch onSearch={this.handleSearch} />

        <h2>Make Notes</h2>
        <NotesInput addNote={this.handleAddNote} />

        <div class="custom-container">
          <h2>Active Records</h2>
        </div>
        <NotesLists
          notes={activeNotes}
          onDelete={this.handleDeleteNote}
          onArchive={this.handleArchiveNote}
        />

        <div class="custom-container">
          <h2>Archives</h2>
        </div>
        <NotesLists
          notes={archivedNotes}
          onDelete={this.handleDeleteNote}
          onArchive={this.handleArchiveNote}
        />
      </div>
    );
  }
}

export default App;
