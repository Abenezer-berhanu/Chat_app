"use client";
import { SendHorizontal, SmilePlus } from "lucide-react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function MessageInput() {
  const [input, setInput] = useState("");
  const [emoji, setEmoji] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    emoji?: string
  ) => {
    if (emoji) {
      //@ts-ignore
      setInput((prev) => prev + e.emoji);
    } else {
      setEmoji(false);
      setInput(e.target.value);
    }
  };
  return (
    <div className="h-14 relative">
      <input
        type="text"
        className="indent-5 rounded-full w-full h-full border border-primary outline-none"
        value={input}
        onChange={handleChange}
        placeholder="Type a Message"
      />
      <div className="flex">
        {input && (
          <SendHorizontal className="absolute text-primary right-4 top-0 bottom-0 my-auto cursor-pointer" />
        )}
        <div className="absolute top-[-500px] left-0">
          <EmojiPicker
            open={emoji}
            onEmojiClick={(e: any) => handleChange(e, "emoji")}
          />
        </div>
        <SmilePlus
          className="absolute text-primary right-4 top-0 bottom-0 my-auto cursor-pointer"
          onClick={() => setEmoji(!emoji)}
        />
      </div>
    </div>
  );
}

export default MessageInput;
