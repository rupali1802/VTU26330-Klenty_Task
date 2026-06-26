import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  GraduationCap,
} from "lucide-react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      style={{
        background:
          "linear-gradient(135deg,#4F46E5,#5B3DF5,#7C3AED)",
        padding: "22px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(79,70,229,.25)",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "15px",
            background: "rgba(255,255,255,.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <GraduationCap size={30} />
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Student Project Management Portal
          </h2>

          <p
            style={{
              marginTop: "5px",
              opacity: ".9",
              fontSize: "15px",
            }}
          >
            Manage your mini project tasks efficiently
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            border: "none",
            background: "rgba(255,255,255,.15)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Menu size={22} />
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "none",
            background: "white",
            color: "#4F46E5",
            padding: "11px 18px",
            borderRadius: "12px",
            fontWeight: "600",
            cursor: "pointer",
            transition: ".3s",
          }}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;