import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message.trim() === "") return;

    alert("You asked: " + message);

    setMessage("");
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          height: "350px",
          background: "#0f172a",
          padding: "20px",
          borderRadius: "10px",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        <p>
          🤖 Welcome! Ask anything about your uploaded industrial documents.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your PDF..."
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;