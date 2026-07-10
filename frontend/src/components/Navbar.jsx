function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#111827",
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>
        Industrial Brain AI
      </h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>

        <a href="/upload" style={{ color: "white", textDecoration: "none" }}>
          Upload
        </a>

        <a href="/chat" style={{ color: "white", textDecoration: "none" }}>
          AI Chat
        </a>
      </div>
    </nav>
  );
}

export default Navbar;