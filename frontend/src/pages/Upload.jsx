import UploadBox from "../components/UploadBox";

function Upload() {
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
        Upload Industrial Documents
      </h1>

      <UploadBox />
    </div>
  );
}

export default Upload;