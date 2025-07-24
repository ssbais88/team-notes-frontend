import { useEffect, useState } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await getNotes();
      setNotes(res.data);
    } catch (err) {
      alert("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (note) => {
    try {
      if (selectedNote) {
        await updateNote(selectedNote._id, note);
      } else {
        await createNote(note);
      }
      fetchNotes();
      setSelectedNote(null);
    } catch {
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this note?")) {
      try {
        await deleteNote(id);
        fetchNotes();
      } catch {
        alert("Delete failed");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="bg-white p-4 shadow rounded"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <h2 className="mb-4 text-center">📝 Team Notes Manager</h2>
        <NoteForm
          onSubmit={handleAddOrUpdate}
          selectedNote={selectedNote}
          onCancel={() => setSelectedNote(null)}
        />
        {loading ? (
          <p className="text-center text-muted">Loading...</p>
        ) : (
          <NoteList
            notes={notes}
            onEdit={setSelectedNote}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
