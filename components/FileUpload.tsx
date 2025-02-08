//ui code
// import vector from "../public/vector.svg";
// import Image from "next/image";

// const FileUpload = ({isVisible}) => {
//   return (
//     <>
//       <div
//         className={`transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
//       >
//         <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
//           {/* Drag & Drop Box */}
//           <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 mx-4 hover:bg-gray-100 transition">
//             <Image src={vector} alt="pdf's image" className="transition-transform transform hover:scale-110" />
//             <div>
//               <div className="text-xl font-semibold">Please Drop PDF Files</div>
//               <div className="text-lg">or click to browse</div>
//             </div>
//           </div>

//           {/* URL Input Section */}
//           <div>
//             <div className="flex items-center">
//               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
//               <span className="font-medium text-gray-500">Or Paste an URL</span>
//               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="https://youtu.be/abc?si=pqr"
//                 className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none" />
//               <button className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
//                 Go
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FileUpload;


//previous code
"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Inbox, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { storage } from "../src/firebase";
import { ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from "firebase/storage";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
import Image from "next/image";
import vector from "../public/vector.svg";

const FileUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [storeUrl, setStoreUrl] = useState("");
    const router = useRouter();

    const { mutate, isPending } = useMutation({
        mutationFn: async ({
            storeUrl,
            file_key,
            file_name
        }: {
            storeUrl: string;
            file_key: string;
            file_name: string;
        }) => {
            const response = await axios.post("/api/create-chat", {
                storeUrl, file_key, file_name
            });

            console.log(response.data);

            return response.data;
        },
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            const file_key = uuidv4().toString();
            const storageRef = ref(storage, `pdf/${file_key}_${file.name}`);

            if (file.size > 10 * 1024 * 1024) {
                toast.error("File too large");
                return;
            }

            try {
                setUploading(true);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot: UploadTaskSnapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // You can use this progress value to update a progress bar if needed
                    },
                    (error) => {
                        console.error("Upload failed:", error);
                        toast.error("Upload failed. Please try again.");
                        setUploading(false);
                    },
                );

                await uploadTask;

                const url = await getDownloadURL(ref(storage, `pdf/${file_key}_${file.name}`));
                setStoreUrl(url);

                toast.success("File uploaded successfully!");

                if (!file.name || !file_key) {
                    toast("Something went wrong in fileupload");
                    return;
                }

                // Now that we have the URL, we can call mutate
                mutate(
                    { storeUrl: url, file_key, file_name: file.name },  // Use the URL directly instead of the state
                    {
                        onSuccess: ({ chat_id }) => {
                            console.log(chat_id);
                            toast.success("Chat created!");
                            router.push(`/chat/${chat_id}`);
                        },
                        onError: (err) => {
                            toast.error("Error creating chat");
                            console.error(err);
                        },
                    }
                );

            } catch (error) {
                console.error("Error during file upload:", error);
                toast.error("An error occurred. Please try again.");
            } finally {
                setUploading(false);
            }
        },
    });

    return (
        <div
      className="transition-all duration-700 ease-in-out transform "
    >
      <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
        <div
          {...getRootProps({
            className:
              "flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 mx-4 hover:bg-gray-100 transition cursor-pointer",
          })}
        >
          <input {...getInputProps()} />
          {uploading || isPending ? (
            <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
          ) : (
            <>
              <Image src={vector} alt="pdf's image" className="" />
              <div>
                <div className="text-xl font-semibold">Please Drop PDF Files</div>
                <div className="text-lg">or click to browse</div>
              </div>
            </>
          )}
        </div>

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
        // <div className="p-2 bg-white rounded-xl">
        //     <div
        //         {...getRootProps({
        //             className:
        //                 "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-20 flex justify-center items-center flex-col",
        //         })}
        //     >
        //         <input {...getInputProps()} />
        //         {uploading || isPending ? (
        //             <>
        //                 <Loader2 className="h-20 w-20 text-blue-500 animate-spin" />
        //                 <p className="mt-2 text-sm text-slate-400">
        //                     Spilling Tea to GPT...
        //                 </p>
        //             </>
        //         ) : (
        //             <>
        //                 <Inbox className="w-20 h-20 text-blue-500" />
        //                 <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
        //             </>
        //         )}
        //     </div>
        // </div>
    );
};

export default FileUpload;


//uploading to S3
// "use client";
// import { uploadToS3 } from "@/lib/s3";
// import { useMutation } from "@tanstack/react-query";
// import { Inbox, Loader2 } from "lucide-react";
// import React from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";

// // https://github.com/aws/aws-sdk-js-v3/issues/4126

// const FileUpload = () => {
//   const router = useRouter();
//   const [uploading, setUploading] = React.useState(false);
//   const { mutate, isPending } = useMutation({
//     mutationFn: async ({
//       file_key,
//       file_name,
//     }: {
//       file_key: string;
//       file_name: string;
//     }) => {
//       const response = await axios.post("/api/create-chat", {
//         file_key,
//         file_name,
//       });
//       return response.data;
//     },
//   });

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { "application/pdf": [".pdf"] },
//     maxFiles: 1,
//     onDrop: async (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file.size > 10 * 1024 * 1024) {
//         // bigger than 10mb!
//         toast.error("File too large");
//         return;
//       }

//       try {
//         setUploading(true);
//         const data = await uploadToS3(file);
//         console.log("meow", data);
//         if (!data?.file_key || !data.file_name) {
//           toast.error("Something went wrong");
//           return;
//         }
//         mutate(data, {
//           onSuccess: ({ chat_id }) => {
//             toast.success("Chat created!");
//             router.push(`/chat/${chat_id}`);
//           },
//           onError: (err) => {
//             toast.error("Error creating chat");
//             console.error(err);
//           },
//         });
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setUploading(false);
//       }
//     },
//   });
//   return (
//     <div className="p-2 bg-white rounded-xl">
//       <div
//         {...getRootProps({
//           className:
//             "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
//         })}
//       >
//         <input {...getInputProps()} />
//         {uploading || isPending ? (
//           <>
//             {/* loading state */}
//             <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
//             <p className="mt-2 text-sm text-slate-400">
//               Spilling Tea to GPT...
//             </p>
//           </>
//         ) : (
//           <>
//             <Inbox className="w-10 h-10 text-blue-500" />
//             <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FileUpload;