'use client'

import Image from "next/image";
import plusImage from "../public/frame3.svg"
import minusImage from "../public/frame2.svg"
import { useState } from "react";

const MainIntro9 = () => {
  const [button1,setButton1] = useState(true);
  const [button2,setButton2] = useState(true);
  const [button3,setButton3] = useState(true);
  const [button4,setButton4] = useState(true);
  const [button5,setButton5] = useState(true);
  const [button6,setButton6] = useState(true);

  return (
    <div className="mt-20">
    <div className="flex justify-center items-center mb-4">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button1?plusImage:minusImage} alt="plus image" onClick={()=>setButton1(!button1)}/>
          </div>
          {button1?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    <div className="flex justify-center items-center mb-4">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button2?plusImage:minusImage} alt="plus image" onClick={()=>setButton2(!button2)}/>
          </div>
          {button2?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    <div className="flex justify-center items-center mb-4">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button3?plusImage:minusImage} alt="plus image" onClick={()=>setButton3(!button3)}/>
          </div>
          {button3?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    <div className="flex justify-center items-center mb-4">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button4?plusImage:minusImage} alt="plus image" onClick={()=>setButton4(!button4)}/>
          </div>
          {button4?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    <div className="flex justify-center items-center mb-4">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button5?plusImage:minusImage} alt="plus image" onClick={()=>setButton5(!button5)}/>
          </div>
          {button5?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    <div className="flex justify-center items-center">
        <div className="border-2 rounded-lg flex flex-col min-w-[85%] max-w-[85%] p-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold text-xl">Wait, how are you different from the competition?</span>
            <Image src={button6?plusImage:minusImage} alt="plus image" onClick={()=>setButton6(!button6)}/>
          </div>
          {button6?"":<div className="pt-2 pb-2 text-gray-500">
          No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
          </div>}
        </div>
    </div>
    </div>
  );
};

export default MainIntro9;