import { Link } from "react-router-dom";

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
      <h2 style={{ color: "#3b82f6", margin: 0 }}>
        Industrial Brain AI
      </h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Upload
        </Link>

        <Link
          to="/chat"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          AI Chat
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;