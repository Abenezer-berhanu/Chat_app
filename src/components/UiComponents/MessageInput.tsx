"use client";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

function MessageInput() {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="h-14 relative">
      <input
        type="text"
        className="indent-5 relative rounded-full w-full h-full border border-primary outline-none"
        value={input}
        onChange={handleChange}
        placeholder="Type a Message"
      />
      {input && (
        <SendHorizontal className="absolute text-primary right-4 top-0 bottom-0 my-auto cursor-pointer" />
      )}
    </div>
  );
}

export default MessageInput;
