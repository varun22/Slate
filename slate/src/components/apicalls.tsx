



export async function callGeminiAPI(text: string, prompt: string): Promise<string> {

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const apiKey = "AIzaSyBYjQrQeCq8zlzAUNBP_gqok0ukUJUHWm0";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    prompt += text;

    const result = await model.generateContent(prompt);
    console.log("These are the generated notes: \n\n" + result.response.text());


    return result.response.text();
 }