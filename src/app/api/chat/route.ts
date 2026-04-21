import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are Piney, the official AI assistant for PineCode Solutions, a software development agency based in Jammu, J&K.
Answer questions ONLY regarding PineCode Solutions. Be professional, friendly, and helpful.

Our Products:
1. CRM System: Leads & customer management (₹999/month).
2. POS & Billing: Retail & shop billing software (₹1,499/month).
3. Clinic Manager: Appointment & patient records for doctors (₹1,299/month).
4. Inventory: Stock & supplier tracking (₹1,299/month).
5. Business Website: Modern Next.js websites (₹8,000 one-time).

Location: Jammu, Jammu & Kashmir.
Email: pinecode47@gmail.com

Keep your responses short (2-3 sentences max).
`;

export async function POST(req: Request) {
  let message = "";
  let history = [];
  
  try {
    const body = await req.json();
    message = body.message;
    history = body.history || [];

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    // Use the latest available model from your account: gemini-2.5-flash
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error.message || error);
    
    // Fallback if systemInstruction or model name fails
    try {
      const modelFallback = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `${SYSTEM_PROMPT}\n\nUser: ${message}`;
      const result = await modelFallback.generateContent(prompt);
      const text = result.response.text();
      return NextResponse.json({ text });
    } catch (fallbackError: any) {
      return NextResponse.json({ error: "AI Error", details: fallbackError.message }, { status: 500 });
    }
  }
}
