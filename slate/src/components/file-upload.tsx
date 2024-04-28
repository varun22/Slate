import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      console.log("Selected file:", selectedFile);
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file:", file);
      const formData = new FormData();
      formData.append("dropzone-file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("Error uploading file:", response.statusText);
        }
      } catch (error: any) {
        console.error("Error uploading file:", error.message);
      }
    } else {
      console.warn("No file selected for upload");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <IoMdCloudUpload />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">
              Choose a file or drag & drop your notes
            </span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            .pdf files only (Upto 50 MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf"
        />
      </label>
      <button
        onClick={handleUpload}
        disabled={!file}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Upload File
      </button>
    </div>
  );
}
