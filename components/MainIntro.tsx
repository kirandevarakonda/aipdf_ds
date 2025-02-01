"use client";
// import vector from "../public/vector.svg"
// import Image from "next/image";
// const MainIntro = () => {

//   return (
//     <>
//       <div className=" flex bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center h-[566px]">
//         <div>
//         <div className="container mx-auto px-4">
//           <div className="max-w-lg mx-auto p-8 bg-inherit">
//             <h2 className="text-4xl font-bold mb-4">Talk to <span className="text-customPurple">Your PDFs</span></h2>
//             <p className="text-gray-800 mb-6 font-normal text-lg">
//               Do not read the long documents, our AI tool is at your help.
//               Summarize the PDF, YouTube video, blog, or Podcast to extract
//               information easily.
//             </p>
//             <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition">Get Started for free!</button>
//           </div>
//         </div>
//         </div>
//         <div>
//         <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20">
//         <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 ml-4 mr-4">
//           <div>
//             <Image src={vector} alt="pdf's image"></Image>
//           </div>
//           <div>
//             <div className="text-xl font-semibold">Please Drop PDF Files</div>
//             <div className="text-lg">or click to browse</div>
//           </div>
//         </div>
//         <div>
//             <div className="flex items-center">
//               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6"/>
//               <span className="font-medium text-gray-500">Or Paste an URL</span>
//               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6"/>
//             </div>
//             <div className="flex items-center">
//               <input type="text" placeholder="https://youtu.be/abc?si=pqr" className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2"/>
//               <button className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition">Go</button>
//             </div>
//         </div>
//       </div>
//       </div>
//     </div>
    
//   </>
//   );
// };



// export default MainIntro;


import { useEffect, useState } from "react";
import Image from "next/image";
import vector from "../public/vector.svg";

const MainIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Small delay for smooth animation
  }, []);

  return (
    <div className="flex bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center h-[566px] overflow-hidden">
      {/* Left Content (Text Section) */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto p-8 bg-inherit">
            <h2 className="text-4xl font-bold mb-4">
              Talk to <span className="text-customPurple">Your PDFs</span>
            </h2>
            <p className="text-gray-800 mb-6 font-normal text-lg">
              Do not read long documents, our AI tool is at your service.
              Summarize PDFs, YouTube videos, blogs, or podcasts effortlessly.
            </p>
            <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
              Get Started for Free!
            </button>
          </div>
        </div>
      </div>

      {/* Right Content (File Upload Box) */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
          {/* Drag & Drop Box */}
          <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 mx-4 hover:bg-gray-100 transition">
            <Image src={vector} alt="pdf's image" className="transition-transform transform hover:scale-110" />
            <div>
              <div className="text-xl font-semibold">Please Drop PDF Files</div>
              <div className="text-lg">or click to browse</div>
            </div>
          </div>

          {/* URL Input Section */}
          <div>
            <div className="flex items-center">
              <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
              <span className="font-medium text-gray-500">Or Paste an URL</span>
              <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="https://youtu.be/abc?si=pqr"
                className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none"
              />
              <button className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
