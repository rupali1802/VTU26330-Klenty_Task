import { ClipboardX } from "lucide-react";

function EmptyState() {
  return (
    <div
      className="card"
      style={{
        marginTop: "30px",
        padding: "70px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "90px",
          height: "90px",
          margin: "auto",
          borderRadius: "50%",
          background: "#EEF2FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#4F46E5",
        }}
      >
        <ClipboardX size={45} />
      </div>

      <h2
        style={{
          marginTop: "25px",
        }}
      >
        No Tasks Found
      </h2>

      <p
        style={{
          marginTop: "10px",
          color: "#666",
          fontSize: "15px",
        }}
      >
        Create a new task or change your search/filter to see tasks.
      </p>
    </div>
  );
}

export default EmptyState;