'use client'
import { useState } from "react";
import Image from "next/image";
import translate from "../public/translate.svg"
import alignvertical from "../public/alignverticalcenter01.svg";
import loading from "../public/frame-189.svg";
import stars from "../public/stars.svg";
import spacewidth from "../public/spacewidth.svg";
import mainicon from "../public/ai-essentials-icon-set.svg"
import share from "../public/frame10.svg";
import download from "../public/frame9.svg";
import thumbsup from "../public/icon--24-px--thumbsup.svg"
import thumbsdown from "../public/icon--24-px--thumbsdown.svg";
import edit from "../public/pencil03.svg";
import pin from "../public/pinangle.svg";
import copy from "../public/copy.svg";
import {AcmeLogo} from "../public/logo";
const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg text-black font-semibold transition";
  const variants = {
    primary: "",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function PdfViewComponent(){
  const [rating, setRating] = useState(4);

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="flex bg-white shadow-lg rounded-2xl p-6 w-full max-w-8xl">
        {/* PDF View Section */}
        <aside className="min-w-[50%] bg-purple-300 flex justify-center items-center p-4">
          <span className="text-black font-bold rotate-[-45deg] text-xl">PDF View</span>
        </aside>
        
        {/* Main Content */}
        <div className=" p-4">
          <div className="border-2 rounded-lg p-4">
          <div className="flex justify-between items-start pb-2">
            <div className="flex gap-2">
             <Image src={mainicon} alt="icon"></Image>
              <h2 className="text-lg font-semibold">Summary</h2>
            </div>
            <div className="flex gap-2">
              <div>
                  <div className="flex gap-2">
                    <Image src={share} alt="share"></Image>
                    <button className="text-normal font-normal">Share Chat</button>
                  </div>
              </div>
              <div>
                  <div className="flex gap-2">
                    <Image src={download} alt="download"></Image>
                    <button className="text-normal font-normal">Download Chat</button>
                  </div>
              </div>
            </div>
          </div>
          <hr/>
          <p className="mt-2 text-gray-700">
            Dear Hiring Manager
            <br /><br />
            I am writing to express my interest in the job position at your company. I have a strong background in
            [relevant field/industry] and believe that my skills and experience make me a suitable candidate for this
            role. I am confident in my ability to contribute to the success of your team.
            <br /><br />
            Thank you for considering my application. I have attached my resume for your review and would welcome the
            opportunity to discuss my qualifications further.
            <br /><br />
            Sincerely, <br />
            [Your Name]
          </p>
          <div className="flex mt-4 justify-between items-start">
            <div className="flex gap-2">
            <span className="font-semibold">Scoring: </span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>&#9733;</span>
              ))}
            </div>
            </div>
            <div className="flex gap-3">
              <button>
              <Image src={thumbsup} alt="thumbsup"></Image>
              </button>
              <button>
              <Image src={thumbsdown} alt="thumbsdown"></Image>
              </button>
              <button>
              <Image src={copy} alt="copy"></Image>
              </button>
            </div>
          </div>
          </div>

        <div className="flex flex-col justify-end items-end mt-12">
          <p className="text-gray-400 pb-2">2.03 PM, 15 Nov</p>
          <div className="flex gap-2">
          <p className="text-gray-400">Design development, UX/UI, product design - what is this?</p>
          <Image src={edit} alt="edit"></Image>
          <Image src={pin} alt="pin"></Image>
          </div>
        </div>

          <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
              <AcmeLogo/>
              <p className="text-gray-500 font-medium">2.03 PM, 15 Nov</p>
            </div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <p className="text-gray-600">1. Intelligent Template Generator</p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {[10, 8, 7].map((score, i) => (
                <div key={i} className="p-4 border rounded-lg shadow-sm">
                  <span className="block font-bold text-purple-600">{i + 1}</span>
                  <p className="mt-2 font-semibold">AIDA Framework</p>
                  <p className="text-sm text-gray-500">
                    Impress potential employers with compelling job application emails that stand out from the competition.
                  </p>
                  <p className="mt-2 text-sm font-semibold">Confidence Score</p>
                  <p className="text-yellow-600 font-bold">{score}/10</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <Button variant="outline" className="text-black bg-gray-200 flex items-center gap-1">
              <Image src={translate} alt="translate"></Image>Translate</Button>
            <Button variant="outline" className="text-black bg-gray-200 flex items-center gap-1">
              <Image src={stars} alt="stars"></Image>Improve</Button>
            <Button variant="outline" className="text-black bg-gray-200 flex items-center gap-1">
              <Image src={spacewidth} alt="spacewidth"></Image>Make longer</Button>
            <Button variant="outline" className="text-black bg-gray-200 flex items-center gap-1">
              <Image src={alignvertical} alt="alignvertical"></Image>Make shorter</Button>
          </div>

          <div className="mt-6 border-2 rounded-lg flex justify-start">
            <Button className="flex items-center gap-2">
              <Image src={loading} alt="loading"></Image>Generate message...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

