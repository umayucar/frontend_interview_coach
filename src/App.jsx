import { useState } from "react";

import "./App.css";
import { Chatbot } from "./components/Chatbot";
import User from "./components/User";
import { useGemini } from "./hooks/useGemini";

function App() {
  const [userInput, setUserInput] = useState("");

  // Custom Hook'u kullanıyoruz
  const { history, sendMessage, isLoading, error } = useGemini();

  const handleChat = async (event) => {
    event.preventDefault();
    setUserInput("");

    await sendMessage(userInput);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div className="relative bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] flex flex-col">
        {/* Heading */}
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">
            Frontend Interview Coach
          </h2>
          <p className="text-sm text-[#6b7280] leading-3">
            Master React & JavaScript
          </p>
        </div>

        {/* Chat container */}
        <div className="flex-1 overflow-hidden pr-2">
          <div className="h-full overflow-y-auto">
            {history.map((item, index) =>
              item.role === "user" ? (
                <User key={index} text={item.text} />
              ) : (
                <Chatbot key={index} text={item.text} />
              ),
            )}
            {isLoading && (
              <div className="text-xs text-gray-400 animate-pulse">
                AI düşünüyor...
              </div>
            )}
            {error && <div className="text-xs text-red-500">{error}</div>}
          </div>
        </div>

        {/* Input box */}
        <div className="pt-4">
          <form
            onSubmit={handleChat}
            className="flex items-center w-full space-x-2"
          >
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:opacity-50 text-[#030712]"
              placeholder="Message Gemini"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
