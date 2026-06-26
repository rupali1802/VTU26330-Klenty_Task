import { CalendarDays, Pencil, Trash2 } from "lucide-react";

function TaskCard({ task, onEdit, onDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return {
          bg: "#FEF3C7",
          color: "#D97706",
        };

      case "In Progress":
        return {
          bg: "#DBEAFE",
          color: "#2563EB",
        };

      case "Completed":
        return {
          bg: "#DCFCE7",
          color: "#16A34A",
        };

      default:
        return {
          bg: "#E5E7EB",
          color: "#374151",
        };
    }
  };

  const statusStyle = getStatusColor(task.status);

  return (
    <div
      className="card"
      style={{
        padding: "22px",
        borderRadius: "18px",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "230px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(0,0,0,0.08)";
      }}
    >
      {/* Top Section */}
      <div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "12px",
            color: "#222",
          }}
        >
          {task.title}
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            minHeight: "60px",
            wordBreak: "break-word",
          }}
        >
          {task.description}
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "18px",
            padding: "7px 16px",
            borderRadius: "50px",
            background: statusStyle.bg,
            color: statusStyle.color,
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {task.status}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          marginTop: "22px",
          borderTop: "1px solid #ECECEC",
          paddingTop: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {/* Date */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#777",
              fontSize: "14px",
            }}
          >
            <CalendarDays size={16} />

            {task.created_at
              ? new Date(task.created_at).toLocaleDateString()
              : "Today"}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => onEdit(task)}
              style={{
                background: "#EEF2FF",
                border: "none",
                color: "#4F46E5",
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => onDelete(task.id)}
              style={{
                background: "#FEE2E2",
                border: "none",
                color: "#DC2626",
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;