function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        color: "white",
        padding: "120px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
        }}
      >
        Industrial Brain AI
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#cbd5e1",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        AI-powered industrial knowledge platform that understands manuals,
        SOPs, technical documents and answers engineering questions instantly.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "2px solid white",
            padding: "15px 35px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;