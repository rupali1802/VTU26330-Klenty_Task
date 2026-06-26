import { Trash2 } from "lucide-react";

function DeleteModal({ onCancel, onDelete }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        className="card"
        style={{
          width: "90%",
          maxWidth: "430px",
          padding: "30px",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "auto",
            borderRadius: "50%",
            background: "#FEE2E2",
            color: "#DC2626",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Trash2 size={35} />
        </div>

        <h2
          style={{
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          Delete Task?
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Are you sure you want to delete this task?
          <br />
          This action cannot be undone.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <button
            className="btn btn-outline"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="btn btn-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;