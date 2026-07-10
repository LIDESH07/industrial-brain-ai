function WhyChoose() {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "42px" }}>
        Why Choose Industrial Brain AI?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>⚡ Fast Answers</h3>
          <p>Get instant responses from technical manuals.</p>
        </div>

        <div>
          <h3>📚 Knowledge Base</h3>
          <p>Search thousands of pages within seconds.</p>
        </div>

        <div>
          <h3>🤖 AI Powered</h3>
          <p>Built using modern Generative AI technology.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;