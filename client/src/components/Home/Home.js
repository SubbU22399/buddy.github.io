import React from "react";
import ContactsContainer from "./components/contact/ContactsContainer";
import ChatContainer from "./components/message/ChatContainer";

const Home = () => {
  return (
    <div className=" flex h-[100vh] overflow-hidden text-white ">
      <ContactsContainer />
      <ChatContainer />
    </div>
  );
};

export default Home;
