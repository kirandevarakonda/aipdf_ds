// import { cn } from "@/lib/utils";
// import { Message } from "ai/react";
// import { Loader2 } from "lucide-react";
// import React from "react";

// type Props = {
//   isLoading: boolean;
//   messages: Message[];
// };

// const MessageList = ({ messages, isLoading }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Loader2 className="w-6 h-6 animate-spin" />
//       </div>
//     );
//   }
//   if (!messages) return <></>;
//   return (
//     <div className="flex flex-col gap-2 px-4">
//       {messages.map((message) => {
//         return (
//           <div
//             key={message.id}
//             className={cn("flex", {
//               "justify-end pl-10": message.role === "user",
//               "justify-start pr-10": message.role === "assistant",
//             })}
//           >
//             <div
//               className={cn(
//                 "rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10",
//                 {
//                   "bg-[#844af9] text-white": message.role === "user",
//                 }
//               )}
//             >
//               <p>{message.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MessageList;

import React from "react";
import { Loader2 } from "lucide-react";
import { Message } from "ai/react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  isLoading: boolean;
  messages: Message[];
};

const MessageList = ({ messages, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!messages.length) {
    return <p className="text-center text-gray-500">No messages yet...</p>;
  }
  // console.log(messages);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn("flex", {
            "justify-end": message.role === "user",
            "justify-start": message.role === "assistant",
          })}
        >
          <div
            className={cn(
              "rounded-lg px-4 py-2 text-sm shadow-md",
              message.role === "user" ? "bg-[#844af9] text-white" : "bg-gray-200"
            )}
            
          >
            {/* <p>{message.content}</p> */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;



//formatted response
// import React from "react";
// import { Loader2 } from "lucide-react";
// import { Message } from "ai/react";
// import { cn } from "@/lib/utils";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// type Props = {
//   isLoading: boolean;
//   messages: Message[];
// };

// const MessageList = ({ messages, isLoading }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center w-full h-full">
//         <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
//       </div>
//     );
//   }

//   if (!messages.length) {
//     return <p className="text-center text-gray-500">No messages yet...</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={cn("flex", {
//             "justify-end": message.role === "user",
//             "justify-start": message.role === "assistant",
//           })}
//         >
//           <div
//             className={cn(
//               "rounded-lg px-4 py-2 text-sm shadow-md",
//               message.role === "user" ? "bg-[#844af9] text-white" : "bg-gray-200"
//             )}
//           >
//             {/* Render message content as Markdown */}
//             <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageList;

