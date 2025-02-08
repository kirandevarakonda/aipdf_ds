'use client'
import Image from "next/image";
import Header from "../../components/Header";
import MainIntro from "../../components/MainIntro";
import MainIntro2 from "../../components/MainIntro2";
import MainIntro3 from "../../components/MainIntro3";
import MainIntro4 from "../../components/MainIntro4";
import MainIntro5 from "../../components/MainIntro5";
import MainIntro6 from "../../components/MainIntro6";
import MainIntro7 from "../../components/MainIntro7";
import MainIntro8 from "../../components/MainIntro8";
import MainIntro9 from "../../components/MainIntro9";
import MainIntro10 from "../../components/MainIntro10";
import HeaderUpgrade from "../../components/HeaderUpgrade";
import ChatComponent from "../../components/ChatComponent";
import { uid } from "../../components/SignUp";
import { useTheme } from "../../components/SignIn";
import { createContext,useContext, useState } from "react";
import PdfViewComponent from "../../components/FinalChatComponent";

export const LoginContext = createContext();

//clerk auth
// import { UserButton, useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { LogInIcon, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { checkSubscription } from "@/lib/subscription";
// // import SubscriptionButton from "@/components/SubscriptionButton";
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { eq } from "drizzle-orm";



export default function Home() {
    // const {login,setLogin} = useTheme();
  const [userId, setUserId] = useState(null);

  // const { userId } = auth();
  // console.log(userId);
  // const isAuth = !!userId;
  // const isPro = await checkSubscription();
  // let firstChat;
  
  // if (userId) {
  //   firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
  //   if (firstChat) {
  //     firstChat = firstChat[0];
  //   }
  // }
  

  return (
    <LoginContext.Provider value={{userId,setUserId}}>
    {userId!==null?<HeaderUpgrade/>:<Header/>}
    <MainIntro/>
    <MainIntro2/>
    <MainIntro3/>
    <MainIntro4/>
    <MainIntro5/>
    <MainIntro6/>
    <MainIntro7/>
    <MainIntro8/>
    <MainIntro9/>
    <MainIntro10/>
    {/* <PdfViewComponent/> */}


    {/* <ChatComponent/> */}
    </LoginContext.Provider>
    // <PdfViewComponent/>

  );
}
