import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { FRONTEND_MENTOR_PROMPT } from "../data/prompts";

export function useGemini(systemPrompt = FRONTEND_MENTOR_PROMPT) {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    setError(null);
    setIsLoading(true);

    // 1. Kullanıcı mesajını geçmişe ekle
    const userMessage = { role: "user", text: userInput };
    setHistory((prev) => [...prev, userMessage]);

    try {
      // 2. API İsteği
      const result = await ai.interactions.create({
        model: "gemini-3.5-flash-lite",
        input: userInput,
        system_instruction: systemPrompt,
      });

      // 3. AI yanıtını geçmişe ekle
      const aiResponse = { role: "model", text: result.output_text };
      setHistory((prev) => [...prev, aiResponse]);

      return result.output_text;
    } catch (err) {
      console.error("Gemini API Hatası:", err);
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => setHistory([]);

  return { history, sendMessage, isLoading, error, clearHistory };
}
