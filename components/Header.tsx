'use client'
import { useState } from "react";
import Image from "next/image";
import aipdfchat from "../public/aipdfchat.svg";
import {AcmeLogo} from "../public/logo"
import SignupModal from "./SignUp";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed z-20 w-full">
    <header className="bg-white h-[90px] ">
      <div className="container mx-auto flex justify-between items-center py-4 pl-40 pr-8">
        <div className="flex items-center gap-5">
          <AcmeLogo/>
          <Image src={aipdfchat} alt="logo" width={120} height={40} className="hover:cursor-pointer"/>
        </div>
        <div className="flex items-center">
        <nav className="hidden m-6 md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Features</a>
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Use Case</a>
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Pricing</a>
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Affiliates</a>
        </nav>
          <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition" onClick={() => setIsModalOpen(true)}>
            Get Started
          </button>
          {isModalOpen && <SignupModal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
