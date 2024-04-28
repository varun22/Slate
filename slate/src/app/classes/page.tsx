"use client";
import "firebase/compat/auth";
import FileUpload from "@/components/file-upload";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";

const Card = ({ values }: any) => {
  return (
    <a
      href="/classes"
      className="block w-[410px] h-32 p-6 bg-white bg-opacity-0"
    >
      <div className="flex flex-row">
        <div className=" text-5xl font-semibold  text-gray-900">ECS 161</div>
        <div className="pl-1 pt-3">
          <Image alt="" src={arrow}></Image>
        </div>
      </div>
      <div className="text-xl font-bold  text-gray-900 ">
        University of California, Davis
      </div>
    </a>
  );
};

const classPage: React.FC = () => {
  return (
    <div className="grid grid-cols-5  bg-grey">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-4 m-10 h-screen">
        <Card />
        <FileUpload />
      </div>
    </div>
  );
};

export default classPage;
