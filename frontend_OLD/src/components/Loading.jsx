function Loading() {
  return (
    <div
      style={{
        padding: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #E5E7EB",
          borderTop: "6px solid #4F46E5",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <h3
        style={{
          marginTop: "25px",
          color: "#555",
        }}
      >
        Loading Tasks...
      </h3>

      <style>{`
        @keyframes spin{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;