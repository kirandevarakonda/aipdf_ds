// 'use client'
// import HeaderUpgrade from "./HeaderUpgrade";
// import DocumentsTable from "./Chats";
// import FileUpload from "./FileUpload";
// import { useState,useEffect } from "react";
// import Header from "./Header";

// export default function ChatComponent(){
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 200); // Small delay for smooth animation
//   }, []);
//    return(
//     <div className="min-w-[85%] max-w-[85%] flex flex-col justify-center gap-36">
//     <div>
//       {/* <HeaderUpgrade/> */}
//       <Header/>
//     </div>
//       <div className="ml-[24%]  flex flex-col justify-center items-center">
//         <span className="text-3xl font-bold pb-4">Documnets</span>
//         {/* <FileUpload isVisible={isVisible}/> */}
//         <FileUpload/>
//       </div>
//       <div className="ml-[24%]">
//       <DocumentsTable/>
//       </div>
//     </div>
//    );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send, MessagesSquare } from "lucide-react";
import MessageList from "./MessageList";
import { Message } from "ai";
import mainicon from "../public/ai-essentials-icon-set.svg";
import share from "../public/frame10.svg";
import download from "../public/frame9.svg";
import Image from "next/image";


type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  // Fetch existing messages when component mounts
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, setInput, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });

  // Automatically send "Summarize the PDF" if no messages exist
  useEffect(() => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const autoSummarize = async () => {
      if (messages.length === 0 && !isLoading) {
        await sleep(6000); // 2-second delay
        setInput("Summarize the PDF");
        handleSubmit();
      }
    };

    autoSummarize();
  }, [messages.length, setInput, handleSubmit, isLoading]);

  // Reference for auto-scrolling to the last message
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-full h-full max-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
        <div className="flex items-center space-x-2">
          {/* <MessagesSquare className="text-primary" />
          <h3 className="text-lg font-medium">Start Chatting</h3> */}
          {/* <Image src={mainicon} alt="icon"></Image>
          <h2 className="text-base font-semibold">Summary</h2> */}
        </div>
        {/* <div className="flex gap-3">
        <div className="flex gap-2">
            <Image src={share} alt="share"></Image>
            <button className="text-normal font-normal">Share Chat</button>
        </div>
        <div className="flex gap-2">
            <Image src={download} alt="download"></Image>
            <button className="text-normal font-normal">Download Chat</button>
         </div>
         </div> */}
      </div>

      {/* Message list */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" id="message-container">
        <MessageList messages={messages} isLoading={isLoading} />
        <div ref={lastMessageRef} />
      </div>

      {/* Input section */}
      <div className="p-4 bg-white shadow-sm sticky bottom-0">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="flex-1 bg-gray-100 focus:ring-0 focus:outline-none"
          />
          <Button type="submit" size="icon" className="bg-[#844af9]">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;