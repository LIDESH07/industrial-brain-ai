function Button({ text }) {
  return (
    <button
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;