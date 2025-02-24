"use client";

import { useState } from "react";

export default function ChatbotPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.warn("⚠️ No message entered. Skipping API call.");
      return;
    }

    try {
      console.log("🔹 Button clicked! Preparing to send message:", message); // ✅ Debugging

      const res = await fetch("/api/chatbot/", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      console.log("🔹 Request sent. Waiting for response..."); // ✅ Debugging

      if (!res.ok) {
        console.error("❌ API Request Failed:", res.status, res.statusText);
        throw new Error("Failed to send message");
      }

      const data = await res.json();
      console.log("✅ API Response:", data); // ✅ Debugging
      setResponse(data.reply);
    } catch (error) {
      console.error("❌ Chatbot API Error:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Chatbot</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded w-full text-blue-500 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      <button
        onClick={handleSendMessage}  // ✅ Ensure the function is triggered
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      <p className="mt-4">{response}</p>
    </div>
  );
}
