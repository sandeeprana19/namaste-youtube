import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow my-2">
      <img
        className="h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User icon"
      />
      <span className="font-bold px-2 text-[15px]">{name}</span>
      <span className="text-[15px]">{message}</span>
    </div>
  );
};

export default ChatMessage;
