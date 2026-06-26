import { useEffect, useState } from "react";
import { X } from "lucide-react";

function TaskForm({ task, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        status: "Pending",
      });
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title.trim() === "" ||
      formData.description.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSave(formData);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        className="card"
        style={{
          width: "95%",
          maxWidth: "600px",
          padding: "30px",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            background: "#F3F4F6",
            border: "none",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <X size={20} />
        </button>

        <h2
          style={{
            marginBottom: "25px",
            fontWeight: "700",
            color: "#4F46E5",
          }}
        >
          {task ? "Edit Task" : "Add New Task"}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter task description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                resize: "none",
                fontSize: "15px",
                fontFamily: "Poppins",
              }}
            />
          </div>

          {/* Status */}
          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
            }}
          >
            <button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              {task ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;