import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini AI client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-3-flash-preview';

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: `You are the knowledgeable AI assistant for the VLSI Club Silicon. 
      Your purpose is to help students understand VLSI concepts (Very Large Scale Integration), 
      digital electronics, Verilog, VHDL, FPGA, and ASIC design. 
      Be encouraging, concise, and technical but accessible. 
      If asked about the club, say you are their digital mascot.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });
    return result.text || "I'm processing that signal, but the output is unclear.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interference detected. Please try again later.";
  }
};
