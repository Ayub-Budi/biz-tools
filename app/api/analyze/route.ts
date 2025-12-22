import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Pastikan API Key ada
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is missing in .env file");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("image") as Blob;

    if (!file) {
      return NextResponse.json(
        { error: "File tidak ditemukan" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");

    // Gunakan gemini-flash-latest
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
    });

    // Susun isi konten sesuai standar terbaru SDK
    // const result = await model.generateContent([
    //   {
    //     text: "Tolong jelaskan apa yang ada di foto ini dalam Bahasa Indonesia secara singkat.",
    //   },
    //   {
    //     inlineData: {
    //       data: base64Data,
    //       mimeType: file.type || "image/png",
    //     },
    //   },

    // ]);

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: "Analisa barang di foto ini menggunakan bahasa Indonesia dan berikan output JSON dengan key: 'name', 'color', 'desc', 'category'. untuk category saya mau 1 kata saja" },
            {
              inlineData: {
                data: base64Data,
                mimeType: file.type || "image/png",
              },
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        // temperature: 0.2
      },
    });

    const response = result.response;
    const text = response.text();
    const json = JSON.parse(text);

    return NextResponse.json({ text: json }, { status: 200 });
  } catch (error: any) {
    console.error("Gemini Error Details:", error);

    // Jika masih 404, kemungkinan API Key belum diaktifkan untuk model ini
    return NextResponse.json(
      {
        error: error.message,
        apiKey: apiKey,
        suggestion:
          "Pastikan API Key dibuat di Google AI Studio (aistudio.google.com)",
      },
      { status: 500 }
    );
  }
}
