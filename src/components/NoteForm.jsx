import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function NoteForm({ onSubmit, selectedNote, onCancel }) {
  const [note, setNote] = useState({ title: "", description: "" });

  useEffect(() => {
    if (selectedNote) setNote(selectedNote);
  }, [selectedNote]);

  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return alert("Title is required");
    onSubmit(note);
    setNote({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
      <div className="mb-3">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          value={note.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-control"
        />
      </div>
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {selectedNote ? "Update" : "Add"} Note
        </button>
        {selectedNote && (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  selectedNote: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onCancel: PropTypes.func.isRequired,
};

NoteForm.defaultProps = {
  selectedNote: null,
};
