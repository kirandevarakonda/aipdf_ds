import Image from "next/image";
import aipdfchat from "../public/aipdfchat.svg";
import {AcmeLogo} from "../public/logo";
import UpgradeImage from "../public/lightning01.svg";
import DownArrow from "../public/arrow--chevron-down.svg";
import ProfilePic from "../public/ellipse-11@2x.png";
import { useTheme } from "./SignIn";
import { useContext } from "react";
import { LoginContext } from "../src/app/page";

const HeaderUpgrade = ()=>{
  // const {login,setLogin} = useTheme();
  const {userId,setUserId} = useContext(LoginContext);
  return(
    <div className="fixed z-20 w-full">
    <header className="bg-white h-[90px] ">
      <div className="container mx-auto flex justify-evenly items-center py-4 pr-8">
        <div className="flex items-center gap-5">
          <AcmeLogo/>
          <Image src={aipdfchat} alt="logo" width={120} height={40} className="hover:cursor-pointer"/>
        </div>
        <div className="flex items-center">
        <nav className="hidden m-6 md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">My Documents</a>
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">My Chats</a>
          <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Multi-Document Chat</a>
          <a href="#" className="text-golden font-medium tracking-wide hover:font-bold hover:underline">Upgrade <Image src={UpgradeImage} alt="upgrade image" className="inline"></Image></a>
        </nav>
        </div>
          <div className="flex items-center gap-2">
            <span>Kiran</span>
            <Image src={DownArrow} alt="down arrow"></Image>
            <button onClick={()=>setUserId(null)}>
            <Image src={ProfilePic} alt="Profile Pic" width={40} height={40}></Image>
            </button>
          </div>
        </div>
    </header>
    </div>
  );
}

export default HeaderUpgrade;