import { Search, Plus } from "lucide-react";

function SearchFilter({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
  onAdd,
}) {
  return (
    <div
      className="card"
      style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "18px",
      }}
    >
      <div className="filter-grid">

        {/* Search */}

        <div style={{ position: "relative" }}>
          <Search
            size={20}
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />

          <input
            type="text"
            placeholder="Search by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              paddingLeft: "45px",
            }}
          />
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

        {/* Button */}

        <button
          className="btn btn-primary"
          onClick={onAdd}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            fontSize: "15px",
          }}
        >
          <Plus size={18} />
          Add Task
        </button>

      </div>
    </div>
  );
}

export default SearchFilter;