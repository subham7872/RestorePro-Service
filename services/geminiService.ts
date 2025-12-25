
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSafeSteps = async (damageType: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is experiencing a ${damageType} emergency. 
      Context: ${description}. 
      Provide exactly 4 critical 'immediate safety steps' the homeowner should take while waiting for our restoration crew. 
      Keep it brief, authoritative, and helpful. 
      Format as a list of points.`,
      config: {
        temperature: 0.5,
        maxOutputTokens: 250,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Safety Advice Error:", error);
    return "1. Ensure everyone is out of danger.\n2. Turn off relevant utilities if safe.\n3. Do not enter unstable structures.\n4. Call emergency services if there is active fire or gas leaks.";
  }
};
