// pages/summarize.tsx
"use client";
import { useState } from "react";
import { callGeminiAPI } from "../../components/apicalls";
import Sidebar from "@/components/sidebar";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import { RxPencil2 } from "react-icons/rx";
import { BsQuestionSquareFill } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { PiChatsThin } from "react-icons/pi";

const Card = () => {
  return (
    <a
      href="/classes"
      className="block w-[410px] h-32 p-4 bg-white bg-opacity-0"
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

const Suggestions = ({ values, onClick, icon }: any) => {
  return (
    <button
      className="block w-64 p-6 bg-white m-3 flex flex-wrap rounded-xl shadow"
      onClick={onClick}
    >
      <div className="flex flex-row">
        <div className=" py-2 text-3xl text-neutral-500">{icon}</div>
      </div>
      <div className="text-l font-medium text-gray-900 text-left ">
        {values}
      </div>
    </button>
  );
};
const SummarizePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const handleSummarize = async () => {
    try {
      var val: any;
      val = await callGeminiAPI(inputText);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-grey">
      <div className="justify-center bg-grey grid grid-cols-5">
        <div>
          <Sidebar />
        </div>
        <Card />
      </div>
      <div className="pb-4">
        <div className="pl-64 text-center font-semibold text-neutral-500 text-4xl pt-28">
          Get started by selecting one of
        </div>
        <div className="pl-64 text-center font-semibold text-neutral-500 text-4xl pt-2">
          the following actions...
        </div>
      </div>
      <div className="pl-64 flex flex-row p-3 align-center justify-center">
        <Suggestions
          values="Get the latest organized class notes"
          onClick={() => handleSuggestionClick("Get updated class notes")}
          icon={<RxPencil2 />}
        />
        <Suggestions
          values="Prepare for your next quiz with Questions & answers"
          onClick={() =>
            handleSuggestionClick("Provide questions & answers for topics : []")
          }
          icon={<BsQuestionSquareFill />}
        />
        <Suggestions
          values="Test yourself with quick flash cards"
          onClick={() => handleSuggestionClick("Test me with flash cards")}
          icon={<BsLightningCharge />}
        />
        <Suggestions
          values="Or type any questions to the AI or the forum"
          onClick={() => handleSuggestionClick("[Type your Questions here!]")}
          icon={<PiChatsThin />}
        />
      </div>
      <div className="flex h-screen mb-10 col-span-4 col-start-2">
        <textarea
          value={inputText}
          placeholder="Ask the AI any question from the notes"
          className="rounded-md self-end p-3 justify-self-center shadow-md"
          onChange={handleInputChange}
          rows={1}
          cols={150}
          style={{ color: "black" }} // Apply inline style for text color
        />
        <button
          onClick={handleSummarize}
          className="m-2 self-end justify-self-center"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default SummarizePage;
