import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: {
    "Content-Type": "application/json",
  },
});

// =======================
// GET ALL TASKS
// =======================
export const getAllTasks = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// =======================
// GET SINGLE TASK
// =======================
export const getTaskById = async (id) => {
  try {
    const response = await API.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

// =======================
// CREATE TASK
// =======================
export const createTask = async (task) => {
  try {
    const response = await API.post("/", task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// =======================
// UPDATE TASK
// =======================
export const updateTask = async (id, task) => {
  try {
    const response = await API.put(`/${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// =======================
// DELETE TASK
// =======================
export const deleteTask = async (id) => {
  try {
    const response = await API.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

// =======================
// GET DASHBOARD STATS
// =======================
export const getStats = async () => {
  try {
    const response = await API.get("/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};