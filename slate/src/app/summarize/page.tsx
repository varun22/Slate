// pages/summarize.tsx
"use client"
import { useState } from 'react';
import {callGeminiAPI} from "../../components/apicalls"
const SummarizePage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };



  const handleSummarize = async () => {
    try{
        var val:any; 
       val= await callGeminiAPI(inputText);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows={10}
        cols={50}
        style={{ color: 'black' }} // Apply inline style for text color
      />
      <button onClick={handleSummarize}>Summarize</button>
    </div>
  );
};

export default SummarizePage;


