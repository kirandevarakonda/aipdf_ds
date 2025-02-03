import HeaderUpgrade from "./HeaderUpgrade";
import DocumentsTable from "./Chats";

const ChatSessions = () =>{
  return(
    <div className="max-w-[85%] flex flex-col gap-36">
      <div>
      <HeaderUpgrade/>
      </div>
      <div className="ml-[18%] flex flex-col">
        <span className="text-center text-3xl font-bold pb-4">Chat Sessions</span>
        <DocumentsTable/>
      </div>
    </div>
  );
}

export default ChatSessions;