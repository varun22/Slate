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
import { firestore } from "../firebaseConfig"; 
import 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

const Card = () => {
  return (
    <a href="/classes" className="block w-[410px] h-32 p-4 bg-[#F5F5F5]">
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
const Text = ({ values }: any) => {
  return (
    <div className="block w-64 p-6 bg-white m-3 flex flex-wrap rounded-xl shadow">
      <div className="text-l font-medium text-gray-900 text-left ">
        {values}
      </div>
    </div>
  );
};

const SummarizePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSuggestionClick = async (suggestion: string) => {
    handleSummarize();
  };


  const [sendClicked, setSendClicked] = useState<boolean>(false);


  const handleSummarize = async () => {

    try {
      var val: any;
      const concatenatedString = await concatenateStringsFromFirestore();
      var prompt = "Summarize this text in notes like format but be descriptive enough, don't leave out important information. \n ";
      val = await callGeminiAPI(concatenatedString, prompt);
      setInputs((prevInputs) => [...prevInputs, inputText]);
      setInputText("");
      setSendClicked(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFlashCards = async () => {

    try {
      var val: any;
      const concatenatedString = await concatenateStringsFromFirestore();
      var prompt = "Summarize this text in flash card format for quiz prep. \n ";
      val = await callGeminiAPI(concatenatedString, prompt);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function concatenateStringsFromFirestore() {
  
    let concatenatedString = '';
  
    const querySnapshot = await getDocs(collection(firestore, 'notes'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const string = doc.data().value; // Assuming the field name is "stringField"
  concatenatedString += string + " ";
});

  
    return concatenatedString.trim(); // Remove trailing whitespace
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="justify-center bg-[#F5F5F5] grid grid-cols-5">
        <div>
          <Sidebar />
        </div>
        <Card />
      </div>

      {sendClicked ? (
        <>
          <div className="pl-80 flex flex-col py-8 col-start-5">
            {inputs.map((input, index) => (
              <Text
                key={index}
                values={input}
                className="mb-2 flex  flex-row-reverse"
              ></Text>
            ))}
          </div>
        </>
      ) : (
        <>
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
                handleSuggestionClick(
                  "Provide questions & answers for topics : []"
                )
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
              onClick={() =>
                handleSuggestionClick("[Type your Questions here!]")
              }
              icon={<PiChatsThin />}
            />
          </div>
        </>
      )}
      <div className="flex pl-64 bottom-0 align-center justify-center py-8 col-span-4 col-start-2">
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
