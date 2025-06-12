import { FileText, X } from "lucide-react";
import { memo } from "react";
import { UploadedFile } from "@/app/hooks/useUploadFile";

interface Props {
  uploadedFiles: UploadedFile[];
  formatFileSize: (bytes: number) => string;
  removeFile: (fileId: number) => void;
}

export const Component = ({
  uploadedFiles,
  formatFileSize,
  removeFile,
}: Props) => {
  return uploadedFiles.length > 0 ? (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Uploaded Files</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {uploadedFiles.map((file: UploadedFile) => (
          <div
            key={file.id}
            className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFile(file.id)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
          Process Files
        </button>
      </div>
    </div>
  ) : null;
};

const FilesTable = memo(Component);

export { FilesTable };
