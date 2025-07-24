import PropTypes from "prop-types";

export default function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div className="d-flex flex-column gap-3">
      {notes.length === 0 && <p className="text-muted">No notes available.</p>}
      {notes.map((note) => (
        <div className="card shadow-sm" key={note._id}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="text-muted small">
              Created: {new Date(note.createdAt).toLocaleString()}
            </p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-outline-warning"
                onClick={() => onEdit(note)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
