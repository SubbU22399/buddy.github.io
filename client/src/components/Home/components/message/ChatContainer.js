import React from "react";
import ChatHeader from "./ChatHeader";
import MessageContainer from "./MessageContainer";
import MessageBar from "./MessageBar";

const ChatContainer = () => {
  return (
    <div className="relative md:w-[25vm] lg:w-[15vm] xl:w-[10vm] w-3/6 bg-gray-900">
      <ChatHeader />
      <MessageContainer />
      <MessageBar />
    </div>
  );
};

export default ChatContainer;
