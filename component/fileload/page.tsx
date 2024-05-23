// pages/upload.tsx
import { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    setProgress(0);

    const reader = new FileReader();
    
    reader.onloadstart = () => {
      setProgress(0);
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setProgress(percentComplete);
      }
    };

    reader.onloadend = () => {
      setIsUploading(false);
      alert('File uploaded successfully');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      {!file && <button onClick={handleUpload}>Upload</button>}
      {!isUploading && (
        <div>
          <p>Uploading: {file?.name}</p>
          <progress value={progress} max="100">{progress}%</progress>
        </div>
      )}
    </div>
  );
};

export default Upload;
