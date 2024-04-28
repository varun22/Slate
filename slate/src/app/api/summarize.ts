// pages/api/summarize.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Make the API call to Google Gemini
    try {
      // Your code to call the Gemini API and extract the summary
      const summary = await callGeminiAPI(text);

      res.status(200).json({ summary });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while summarizing the text.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function callGeminiAPI(text: string): Promise<string> {
  // Your code to make API call to Gemini and extract summary
  // Example:
  const summary = 'This is a summary of the input text.';
  return summary;
}
