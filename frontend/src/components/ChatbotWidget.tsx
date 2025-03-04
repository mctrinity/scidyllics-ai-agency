"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✅ Define a strict type for messages
type ChatMessage = {
  sender: "user" | "bot"; // Ensures sender is only "user" or "bot"
  text: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls visibility
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]); // ✅ Use defined type
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null); // ✅ Ref to track last message

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = { sender: "user", text: message }; // ✅ Type-safe object
    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      const res = await fetch("/api/chatbot/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      const botMessage: ChatMessage = { sender: "bot", text: data.reply }; // ✅ Type-safe object
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot API Error:", error);
    } finally {
      setLoading(false);
    }

    setMessage(""); // ✅ Clear input field
  };

  // ✅ Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Detect "Enter" key to send messages
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // ✅ Toggle Chatbot Window (Open/Close)
  const toggleChatbot = () => {
    setIsOpen((prev) => !prev); // ✅ Toggles chat open/close
    if (isOpen) setMessages([]); // ✅ Clears chat history when closing
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* 🔹 Chatbot Window with Slide Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className={`w-80 bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden mb-4 ${isOpen ? "block" : "hidden"}`}
      >
        {/* Header (No Close Button) */}
        <div className="bg-[#497D74] text-white p-3 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">ScidyllicAI</h2>
        </div>

        {/* Chat Messages (White Background, Black Text) */}
        <div className="h-60 overflow-y-auto p-3 bg-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-lg ${
                msg.sender === "user"
                  ? "bg-white text-[#497D74] text-right"
                  : "bg-gray-100 text-[#497D74] text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-500"><i>Typing...</i></p>}
          {/* Invisible div to scroll into view */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="p-3 border-t flex bg-white">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown} // ✅ Detects Enter key
            className="border p-2 rounded w-full text-[#497D74] placeholder-gray-400 bg-white focus:ring-2 focus:ring-[#497D74] focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#497D74] text-white px-4 py-2 ml-2 rounded hover:bg-[#35625B]"
          >
            Send
          </button>
        </div>
      </motion.div>

      {/* 🔹 Floating Chat Button (Now Toggles the Chat Window) */}
      <button
        onClick={toggleChatbot}
        className="bg-[#497D74] text-white p-3 rounded-full shadow-lg hover:bg-[#35625B] transition"
      >
        💬 Chat
      </button>
    </div>
  );
}
