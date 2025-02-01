// import Image from "next/image";


// const MainIntro3 = () => {

//   return (
//     <>
//     <div className="flex justify-center mt-16">
//       <div className="bg-gradient-to-l from-[rgba(3,121,255,0.1608)] via-[rgba(183,75,221,0.1608)] to-[rgba(255,128,95,0.1608)] min-w-[85%] border-2 rounded-3xl">
//         <div className="flex flex-col gap-2 items-center justify-center mt-12 mb-5">
//             <div>
//               <span className="text-customPurple text-lg font-medium">✨ GET STARTED</span>
//             </div>
//             <div>
//               <span className="text-4xl font-bold">Built for any use case</span>
//             </div>
//             <div>
//               <span className="text-base text-gray-500 ">Click on each option to try it out 👇</span>
//             </div>
//           </div>
//           <div >
//             <div className="flex justify-center gap-4 mt-2 mb-4">
//               <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300">
//                 employee_training.pdf
//               </div>
//               <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300">
//                 employee_training.pdf
//               </div>
//               <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300">
//                 employee_training.pdf
//               </div>
//             </div>
//             <div className="flex justify-center gap-4 mb-12">
//             <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300">
//                 employee_training.pdf
//               </div>
//               <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300">
//                 employee_training.pdf
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default MainIntro3;



import Image from "next/image";

const MainIntro3 = () => {
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="bg-gradient-to-l from-[rgba(3,121,255,0.1608)] via-[rgba(183,75,221,0.1608)] to-[rgba(255,128,95,0.1608)] min-w-[85%] border-2 rounded-3xl">
          <div className="flex flex-col gap-2 items-center justify-center mt-12 mb-5">
            <div>
              <span className="text-customPurple text-lg font-medium">✨ GET STARTED</span>
            </div>
            <div>
              <span className="text-4xl font-bold">Built for any use case</span>
            </div>
            <div>
              <span className="text-base text-gray-500">Click on each option to try it out 👇</span>
            </div>
          </div>
          
          {/* File Cards Section */}
          <div>
            <div className="flex justify-center gap-4 mt-2 mb-4">
              <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <button className="font-semibold text-sm">HR_Policies_2025.pdf</button>
              </div>
              <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <button className="font-semibold text-sm">Employee_Handbook.pdf</button>
              </div>
              <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <button className="font-semibold text-sm">Annual_Report_2024.pdf</button>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-12">
              <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <button className="font-semibold text-sm">Marketing_Strategy_2024.pdf</button>
              </div>
              <div className="bg-white border-1 border-gray-50 rounded-2xl w-[220px] flex justify-center pt-2 pb-2 shadow-xl shadow-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <button className="font-semibold text-sm">Client_Project_Report.pdf</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIntro3;
