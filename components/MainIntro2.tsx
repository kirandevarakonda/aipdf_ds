"use client";
// import eclipse1 from "../public/ellipse-1.svg";
// import Image from "next/image";
// import image1png from "../public/image-1@2x.png";

// const MainIntro2 = () => {

//   return (
//     <>
//     <div className="mt-20 flex-col justify-center items-center">
//         <div className="flex flex-col items-center justify-center">
//             <div className="flex justify-around items-start gap-10 mb-20">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                     <div className="w-[60px] h-[60px] rounded-full bg-purple-200 flex justify-center items-center">
//                         <div>1</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                       Uploaded Documnets
//                   </div>
//                   <div className="font-normal max-w-[530px] min-w-[530px]">
//                       Upload PDFs effortlessly.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[630px] h-[419px]"/>
//                 </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex justify-around items-start gap-10 mb-20">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                     <div className="w-[60px] h-[60px] rounded-full bg-purple-200 flex justify-center items-center">
//                         <div>2</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                   Instant Answers
//                   </div>
//                   <div className="font-normal max-w-[530px] min-w-[530px]">
//                   Ask questions, extract details, and get summaries instantly.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[630px] h-[419px]"/>
//                 </div>
//             </div>
//             </div>
//             <div className="flex flex-col items-center justify-center">
//             <div className="flex justify-around items-start gap-10">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                     <div className="w-[60px] h-[60px] rounded-full bg-purple-200 flex justify-center items-center">
//                         <div>3</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                   Verified Sources
//                   </div>
//                   <div className="font-normal max-w-[530px] min-w-[530px]">
//                   Responses are backed by references from your uploaded PDF.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[630px] h-[419px]"/>
//                 </div>
//             </div>
//           </div>
//         </div>
//     </>
//   );
// };
// export default MainIntro2;


//hover code
// import eclipse1 from "../public/ellipse-1.svg";
// import Image from "next/image";
// import image1png from "../public/image-1@2x.png";

// const MainIntro2 = () => {

//   return (
//     <>
//     <div className="mt-20 flex-col justify-center items-center ">
//         <div className="flex flex-col items-center justify-center">
//             <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                     <div className="w-[10%] h-[10%] max-w-[60px] max-h-[60px] justify-center items-center">
//                         <div className="rounded-full bg-purple-300 w-10 h-10 flex items-center justify-center text-center">1</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                       Uploaded Documents
//                   </div>
//                   <div className="font-normal w-[80%] sm:w-[530px]">
//                       Upload PDFs effortlessly.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[80%] sm:w-[630px] h-auto transition-all transform translate-x-[-100%] opacity-0 hover:translate-x-0 hover:opacity-100 duration-1000 ease-in-out"/>
//                 </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center justify-center">
//             <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                 <div className="w-[10%] h-[10%] max-w-[60px] max-h-[60px] justify-center items-center">
//                         <div className="rounded-full bg-purple-300 w-10 h-10 flex items-center justify-center text-center">2</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                   Instant Answers
//                   </div>
//                   <div className="font-normal w-[80%] sm:w-[530px]">
//                   Ask questions, extract details, and get summaries instantly.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[80%] sm:w-[630px] h-auto transition-all transform translate-x-[-100%] opacity-0 hover:translate-x-0 hover:opacity-100 duration-1000 ease-in-out"/>
//                 </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center justify-center">
//             <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
//               <div className="flex gap-8 items-center pt-10">
//                 <div>
//                 <div className="w-[10%] h-[10%] max-w-[60px] max-h-[60px] justify-center items-center">
//                         <div className="rounded-full bg-purple-300 w-10 h-10 flex items-center justify-center text-center">3</div>
//                     </div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-xl">
//                   Verified Sources
//                   </div>
//                   <div className="font-normal w-[80%] sm:w-[530px]">
//                   Responses are backed by references from your uploaded PDF.
//                   </div>
//                 </div>
//               </div>
//                 <div>
//                     <Image src={image1png} alt="image1" className="w-[80%] sm:w-[630px] h-auto transition-all transform translate-x-[-100%] opacity-0 hover:translate-x-0 hover:opacity-100 duration-1000 ease-in-out"/>
//                 </div>
//             </div>
//           </div>
//         </div>
//     </>
//   );
// };

// export default MainIntro2;

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import image1png from "../public/image-1@2x.png";

const MainIntro2 = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: number]: boolean }>({});
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="mt-20 pl-20 pr-20 flex flex-col justify-center items-center relative">
      {/* Line connecting steps (absolute to align properly) */}
      {/* <div className="absolute left-3 top-12 w-[2px] h-[85%] bg-purple-400 hidden lg:block"></div> */}

      {["Uploaded Documents", "Instant Answers", "Verified Sources"].map((title, index) => (
        <div key={index} ref={sectionRefs[index]} className="flex flex-col items-center justify-center relative">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 relative">
            {/* Step Number with Connecting Line */}
            <div className="flex gap-8 items-center pt-10 relative">
              <div className="flex flex-col items-center relative">
                {/* Step Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-300 text-xl font-bold relative z-10">
                  {index + 1}
                </div>

                {/* Thin Line Below Each Step (except last step) */}
                {/* {index !== 2 && (
                  <div className="absolute top-full left-1/2 w-[2px] h-20 bg-purple-400 hidden lg:block"></div>
                )} */}
              </div>
              <div>
                <div className="font-medium text-xl">{title}</div>
                <div className="font-normal w-[80%] sm:w-[530px]">
                  {index === 0
                    ? "Upload PDFs effortlessly."
                    : index === 1
                    ? "Ask questions, extract details, and get summaries instantly."
                    : "Responses are backed by references from your uploaded PDF."}
                </div>
              </div>
            </div>

            {/* Image with Scroll-Based Transition */}
            <div>
              <Image
                src={image1png}
                alt={`image${index + 1}`}
                className={`w-[100%] sm:w-[630px] h-auto transition-all duration-1000 ease-in-out transform ${
                  visibleSections[index] ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainIntro2;
