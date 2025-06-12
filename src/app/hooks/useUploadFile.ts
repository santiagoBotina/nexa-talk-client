import { useRef, useState } from "react";

type DragEvent = React.DragEvent<HTMLDivElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface UploadedFile {
  id: number;
  name: string;
  size: number;
  type: string;
}

export const useUploadFile = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: ChangeEvent) => {
    const files = Array.from(e.target.files as FileList);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      const extension = file.name.toLowerCase().split(".").pop();
      return extension === "csv" || extension === "xlsx" || extension === "xls";
    });

    if (validFiles.length > 0) {
      setUploadedFiles((prev) => [
        ...prev,
        ...validFiles.map(
          (file: File): UploadedFile => ({
            id: Date.now() + Math.random(),
            name: file.name,
            size: file.size,
            type: file.type,
          }),
        ),
      ]);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (fileId: number) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const browseFiles = () => {
    fileInputRef.current?.click();
  };

  return {
    isDragOver,
    uploadedFiles,
    fileInputRef,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
    handleFiles,
    removeFile,
    formatFileSize,
    browseFiles,
  };
};
