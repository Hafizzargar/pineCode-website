import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are Piney, the AI assistant for PineCode Solutions, a software development agency based in Jammu, J&K.
Your goal is to help visitors understand our services and products.

Our Products:
1. CRM System: Leads & customer management (₹999/month).
2. POS & Billing: Retail & shop billing software (₹1,499/month).
3. Clinic Manager: Appointment & patient records for doctors (₹1,299/month).
4. Inventory: Stock & supplier tracking (₹1,299/month).
5. Business Website: Modern Next.js websites (₹8,000 one-time).

Location: Jammu, Jammu & Kashmir.
Email: pinecode47@gmail.com

Be professional, friendly, and concise. Keep your responses short (2-3 sentences max).
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("Missing GEMINI_API_KEY in environment variables");
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });

    // Use a simpler prompt if systemInstruction is causing issues in this version
    const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error details:", error.message || error);
    return NextResponse.json({ error: "Failed to fetch response from AI", details: error.message }, { status: 500 });
  }
}
