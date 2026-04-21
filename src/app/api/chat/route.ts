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

Be professional, friendly, and concise. If you don't know an answer, ask the user to fill out the contact form on the website.
Keep your responses short (2-3 sentences max).
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response from AI" }, { status: 500 });
  }
}
