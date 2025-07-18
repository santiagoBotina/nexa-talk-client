import { Upload } from "lucide-react";
import { memo } from "react";

interface Props {
  isDragOver: boolean;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  browseFiles: () => void;
}

const Component = ({
  isDragOver,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  fileInputRef,
  handleFileSelect,
  browseFiles,
}: Props) => {
  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ${
        isDragOver
          ? "border-blue-400 bg-blue-50"
          : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".csv,.xlsx,.xls"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="flex flex-col items-center space-y-4">
        <div
          className={`p-3 rounded-full ${isDragOver ? "bg-blue-100" : "bg-gray-200"}`}
        >
          <Upload
            className={`w-8 h-8 ${isDragOver ? "text-blue-600" : "text-gray-600"}`}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Arrastra los archivos CSV o Excel aquí
          </h3>
          <p className="text-sm text-gray-600">
            Formatos soportados: .csv, .xlsx
          </p>
        </div>

        <button
          onClick={browseFiles}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
        >
          Buscar archivos
        </button>
      </div>
    </div>
  );
};

const DragAndDrop = memo(Component);

export { DragAndDrop };
