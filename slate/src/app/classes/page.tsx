"use client";
import "firebase/compat/auth";
import FileUpload from "@/components/file-upload";
import Sidebar from "@/components/sidebar";

const classPage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <FileUpload />
    </div>
  );
};

export default classPage;
