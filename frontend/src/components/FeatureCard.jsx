function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        width: "320px",
        background: "#1e293b",
        color: "white",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <h2>{title}</h2>

      <p
        style={{
          color: "#cbd5e1",
          marginTop: "15px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;