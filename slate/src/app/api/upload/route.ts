import { NextRequest, NextResponse } from "next/server"; // To handle the request and response
import { promises as fs } from "fs"; // To save the file temporarily
import { collection, addDoc } from "firebase/firestore";
import firebaseConfig from "../../../firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid"; // To generate a unique filename
import PDFParser from "pdf2json"; // To parse the pdf
import { callGeminiAPI } from "@/components/apicalls";
export async function POST(req: NextRequest) {
  const formData: FormData = await req.formData();
  const uploadedFiles = formData.getAll("dropzone-file");
  let fileName = "";
  let parsedText = "";

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  if (uploadedFiles && uploadedFiles.length > 0) {
    const uploadedFile = uploadedFiles[0];
    console.log("Uploaded file:", uploadedFile);

    // Check if uploadedFile is of type File
    if (uploadedFile instanceof File) {
      // Generate a unique filename
      fileName = "gyghjjkjkjknkj";

      // Convert the uploaded file into a temporary file
      const tempFilePath = `../../Varun_Thakkar-Resume.pdf`;

      // Convert ArrayBuffer to Buffer
      const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

      // Save the buffer as a file
      await fs.writeFile(tempFilePath, fileBuffer);

      // Parse the pdf using pdf2json. See pdf2json docs for more info.

      // The reason I am bypassing type checks is because
      // the default type definitions for pdf2json in the npm install
      // do not allow for any constructor arguments.
      // You can either modify the type definitions or bypass the type checks.
      // I chose to bypass the type checks.
      const pdfParser = new (PDFParser as any)(null, 1);

      // See pdf2json docs for more info on how the below works.
      pdfParser.on("pdfParser_dataError", (errData: any) =>
        console.log(errData.parserError)
      );

      pdfParser.on("pdfParser_dataReady", async () => {
        parsedText = pdfParser.getRawTextContent();
        try {
          const docRef = await addDoc(collection(firestore, "notes"), {
            value: parsedText,
            classes: "ECS 132",
          });
          console.log("Document written with ID: ", docRef.id);
          return docRef.id; // Optionally return the document ID
        } catch (error) {
          console.error("Error adding document: ", error);
          return null;
        }

        try {
          var val = await callGeminiAPI(parsedText);
          // Further processing with the value returned from the API call
        } catch (error) {
          console.error("Error:", error);
        }
      });

      pdfParser.loadPDF(tempFilePath);
    } else {
      console.log("Uploaded file is not in the expected format.");
    }
  } else {
    console.log("No files found.");
  }

  const response = new NextResponse(parsedText);
  response.headers.set("FileName", fileName);
  return response;
}
