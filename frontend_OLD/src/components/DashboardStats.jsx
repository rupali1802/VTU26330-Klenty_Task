import {
  ClipboardList,
  Clock3,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";

function DashboardStats({ stats }) {
  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: <ClipboardList size={30} />,
      color: "#4F46E5",
      bg: "#EEF2FF",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <Clock3 size={30} />,
      color: "#F59E0B",
      bg: "#FEF3C7",
    },
    {
      title: "In Progress",
      value: stats.progress,
      icon: <LoaderCircle size={30} />,
      color: "#3B82F6",
      bg: "#DBEAFE",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <CheckCircle2 size={30} />,
      color: "#10B981",
      bg: "#D1FAE5",
    },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{
            padding: "25px",
            borderRadius: "18px",
            transition: ".3s",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 15px 30px rgba(0,0,0,.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(0,0,0,.08)";
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h4
                style={{
                  color: "#666",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h4>

              <h1
                style={{
                  fontSize: "42px",
                  fontWeight: 700,
                }}
              >
                {card.value}
              </h1>
            </div>

            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "16px",
                background: card.bg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: card.color,
              }}
            >
              {card.icon}
            </div>
          </div>

          <div
            style={{
              height: "6px",
              marginTop: "22px",
              background: "#ECECEC",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width:
                  card.title === "Total Tasks"
                    ? "100%"
                    : card.title === "Pending"
                    ? stats.total === 0
                      ? "0%"
                      : `${(stats.pending / stats.total) * 100}%`
                    : card.title === "In Progress"
                    ? stats.total === 0
                      ? "0%"
                      : `${(stats.progress / stats.total) * 100}%`
                    : stats.total === 0
                    ? "0%"
                    : `${(stats.completed / stats.total) * 100}%`,
                height: "100%",
                background: card.color,
                borderRadius: "20px",
                transition: ".4s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;