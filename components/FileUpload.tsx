import vector from "../public/vector.svg";
import Image from "next/image";

const FileUpload = ({isVisible}) => {
  return (
    <>
      <div
        className={`transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
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
                className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none" />
              <button className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUpload;