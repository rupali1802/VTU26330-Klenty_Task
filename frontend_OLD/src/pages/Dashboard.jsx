import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import SearchFilter from "../components/SearchFilter";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import DeleteModal from "../components/DeleteModal";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getAllTasks();
      setTasks(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTask = async (task) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, task);
      } else {
        await createTask(task);
      }

      loadTasks();
      setShowForm(false);
      setEditingTask(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const openDelete = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    await deleteTask(deleteId);

    setDeleteModal(false);
    setDeleteId(null);

    loadTasks();
  };

  const filteredTasks = useMemo(() => {
    let data = [...tasks];

    if (search !== "") {
      data = data.filter(
        (task) =>
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((task) => task.status === statusFilter);
    }

    data.sort((a, b) => {
      const first = new Date(a.created_at);
      const second = new Date(b.created_at);

      return sortOrder === "Newest"
        ? second - first
        : first - second;
    });

    return data;
  }, [tasks, search, statusFilter, sortOrder]);

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "Pending").length,
    progress: tasks.filter((t) => t.status === "In Progress").length,
    completed: tasks.filter((t) => t.status === "Completed").length,
  };

  return (
    <div className="page">
      <Navbar />

      <div className="container">

        {/* Heading */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className="section-title">Dashboard</h1>

            <p className="subtitle">
              Welcome! Manage your student mini project tasks efficiently.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "20px",
              minWidth: "240px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                color: "#666",
              }}
            >
              Today's Date
            </div>

            <h3 style={{ marginTop: "10px" }}>
              {new Date().toDateString()}
            </h3>
          </div>
        </div>

        {/* Statistics */}

        <DashboardStats stats={stats} />

        {/* Search */}

        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={statusFilter}
          setStatus={setStatusFilter}
          sort={sortOrder}
          setSort={setSortOrder}
          onAdd={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
        />

        {/* Tasks */}

        {loading ? (
          <Loading />
        ) : filteredTasks.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="task-grid">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onDelete={openDelete}
              />
            ))}
          </div>
        )}

        {/* Form */}

        {showForm && (
          <TaskForm
            task={editingTask}
            onClose={() => {
              setShowForm(false);
              setEditingTask(null);
            }}
            onSave={handleSaveTask}
          />
        )}

        {/* Delete */}

        {deleteModal && (
          <DeleteModal
            onCancel={() => setDeleteModal(false)}
            onDelete={handleDelete}
          />
        )}

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#777",
            paddingBottom: "20px",
          }}
        >
          © 2026 Student Project Management Portal. All rights reserved.
        </div>

      </div>
    </div>
  );
}

export default Dashboard;