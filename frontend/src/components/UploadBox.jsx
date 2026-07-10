import { useState } from "react";

function UploadBox() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function removeFile() {
    setFile(null);
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "40px",
        borderRadius: "15px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      {file && (
        <div
          style={{
            marginTop: "30px",
            background: "#334155",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Selected File</h3>

          <p>{file.name}</p>

          <p>{(file.size / 1024).toFixed(2)} KB</p>

          <button
            onClick={removeFile}
            style={{
              marginTop: "15px",
              background: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      )}

      <button
        style={{
          marginTop: "30px",
          width: "100%",
          background: "#2563eb",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Upload PDF
      </button>
    </div>
  );
}

export default UploadBox;