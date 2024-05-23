import React, { useRef, useState } from 'react'
import Icon from '../Icon/page';
import Input from '../input/page';
import styles from './fileupload.module.scss'
import { IoIosClose, IoIosCheckmark } from "react-icons/io";

const FileUplaod: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>("");

    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState("select");

    const handleFileChange = (event: any) => {
        if(event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0] || null)
        }
    };

    const onChooseFile = () => {
        inputRef.current.click()
    }

    const clearFileInput = () => {
        inputRef.current.value = "";
        setProgress(0);
        setUploadStatus("select");
      };

      const handleUpload = async () => {
        if (uploadStatus === "done") {
          clearFileInput();
          return;
        }
    
        try {
          setUploadStatus("uploading");

          const formData = new FormData();
          formData.append("file", selectedFile);

              const onUploadProgress = (progressEvent: any) => {
                const percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percentCompleted);
              };
    
          setUploadStatus("done");
        } catch (error) {
          setUploadStatus("select");
        }
      };

  return (
    <div className={styles["files"]}>
        <Input 
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style="none"
        />

        {!selectedFile && (
            <button className={styles["files-file-btn"]} onClick={onChooseFile}>
                <span className={styles["files-file-btn-icon"]}>
                    <Icon icon="upload"
                        width={12.75}
                        height={14.17}
                    />
                </span>
                <h4>Drop your file here or<span className={styles["text"]}> browse</span></h4>
            </button>
        )}

        {!selectedFile && (
            <>
                <div className={styles["files-file-card"]}>
                    <div className={styles["files-file-card-top"]}>
                        <div className={styles["files-file-card-top-left"]}>
                            <div className={styles["files-file-card-top-left-imageIcon"]}>
                                <Icon
                                    width={24}
                                    height={24}
                                    icon="vector" 
                                />
                            </div>
                            <h6>{selectedFile?.name} Property Image.png</h6>
                        </div>
                        <div className={styles["files-file-card-top-right"]}>
                            {uploadStatus === "select" ? (
                                <button onClick={clearFileInput}>
                                    <span className={styles["icon"]}>
                                        <IoIosClose />
                                    </span>
                                </button>
                                ) : (
                                <div className={styles["files-file-card-top-right-check"]}>
                                    {uploadStatus === "uploading" ? (
                                            <span className={styles["files-file-card-top-right-check-percent"]}>{progress}%</span>
                                        ) 
                                        : 
                                        uploadStatus === "done" ? (
                                            <span
                                            className={styles["files-file-card-top-right-check-item"]}
                                            >
                                                <IoIosCheckmark />
                                            </span>
                                        ) 
                                        : 
                                        null
                                    }
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div className={styles["files-file-card-progress-bg"]}>
                            <div className={styles["files-file-card-progress-bg-progress"]} style={{ width: `${progress}%`, height: 6 }} />
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default FileUplaod