import React from "react";

const DownloadButton = ({ exportPDF }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      <button onClick={exportPDF} style={{ margin: "auto" }}>
        download
      </button>
    </div>
  );
};

export default DownloadButton;
