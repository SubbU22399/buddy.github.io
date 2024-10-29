import { useState } from "react";
import { RiEmojiStickerLine } from "react-icons/ri";
import { GrAttachment, GrCamera } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
const MessageBar = () => {
  const [message, setMessage] = useState("");
  const HandleSend = () => {};
  return (
    <div className="flex w-full bg-gray-500 rounded-md h-[10vh] border-b-2 justify-center p-2">
      <div className="flex-1 flex bg-slate-700 rounded-md items-center gap-5 pr-2 p-2">
        <input
          type="text"
          placeholder="Type your Mesag here"
          className="flex-1 p-3 rounded-md bg-transparent focus:border-none focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
          <GrAttachment />
        </button>
        <div>
          <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
            <GrCamera />
          </button>
        </div>
        <div>
          <button className="text-neutral-100 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end">
            <RiEmojiStickerLine />
          </button>
        </div>
      </div>
      <button
        className="hover:bg-green-600 focus:border-none focus:outline-none focus:text-white duration-300 transition-all justify-end p-2 bg-white rounded-md"
        onClick={HandleSend}
      >
        <IoSend className="text-black text-xl m-2" />
      </button>
    </div>
  );
};

export default MessageBar;
