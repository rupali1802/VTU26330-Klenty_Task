import pool from "../database/db.js";

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single task
export const getTask = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: "Task not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create task
export const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !description) return res.status(400).json({ error: "Title and description required" });

  try {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
      [title, description, status || "Pending"]
    );
    res.status(201).json({ id: result.insertId, title, description, status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update task
export const updateTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    await pool.query(
      "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
      [title, description, status, req.params.id]
    );
    res.json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    await pool.query("DELETE FROM tasks WHERE id=?", [req.params.id]);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Stats
export const getStats = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT status, COUNT(*) as count FROM tasks GROUP BY status"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
