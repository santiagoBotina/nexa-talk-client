"use client";
import { useUploadFile } from "@/app/hooks/useUploadFile";
import { FilesTable } from "@/app/components/UploadFiles/filesTable";
import { DragAndDrop } from "@/app/components/UploadFiles/dragAndDrop";
import { H1 } from "@/app/components/Title/h1";

export default function UploadFile() {
  const {
    isDragOver,
    uploadedFiles,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
    removeFile,
    formatFileSize,
    browseFiles,
  } = useUploadFile();

  return (
    <>
      <div className="mb-6">
        <H1 title="Subir archivos" />
      </div>

      <div className="space-y-6">
        <DragAndDrop
          isDragOver={isDragOver}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          fileInputRef={fileInputRef}
          handleFileSelect={handleFileSelect}
          browseFiles={browseFiles}
        />
        <FilesTable
          uploadedFiles={uploadedFiles}
          formatFileSize={formatFileSize}
          removeFile={removeFile}
        />
      </div>
    </>
  );
}
