import React from "react";
import type { FileUploadProps } from "./FileUpload.types";
import "./fileUpload.css";

export function FileUpload({
  label,
  file,
  onFileSelect,
  error,
}: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="file-group">
      {label && <label className="file-label">{label}</label>}

      <input
        type="file"
        className={`file-input ${error ? "file-input-error" : ""}`}
        onChange={handleChange}
      />

      {file && <div className="file-name">{file.name}</div>}

      {error && <div className="file-error">{error}</div>}
    </div>
  );
}
