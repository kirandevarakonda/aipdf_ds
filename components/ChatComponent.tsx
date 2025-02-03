'use client'
import HeaderUpgrade from "./HeaderUpgrade";
import DocumentsTable from "./Chats";
import FileUpload from "./FileUpload";
import { useState,useEffect } from "react";

export default function ChatComponent(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Small delay for smooth animation
  }, []);
   return(
    <div className="min-w-[85%] max-w-[85%] flex flex-col justify-center gap-36">
    <div>
      <HeaderUpgrade/>
    </div>
      <div className="ml-[24%]  flex flex-col justify-center items-center">
        <span className="text-3xl font-bold pb-4">Documnets</span>
        <FileUpload isVisible={isVisible}/>
      </div>
      <div className="ml-[24%]">
      <DocumentsTable/>
      </div>
    </div>
   );
}