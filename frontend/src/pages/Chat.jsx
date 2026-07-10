import ChatBox from "../components/ChatBox";

function Chat() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        AI Knowledge Assistant
      </h1>

      <ChatBox />
    </div>
  );
}

export default Chat;