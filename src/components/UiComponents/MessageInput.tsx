"use client";
import { SendHorizontal, SmilePlus } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useFormState } from "react-dom";
import { sendMessage } from "@/lib/actions/sendMessage";
import { Button } from "../ui/button";

function MessageInput({
  receiverId,
  id: ownerId,
}: {
  receiverId: string;
  id: any;
}) {
  const [input, setInput] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [state, formAction] = useFormState(sendMessage, null);
  const formRef = useRef(null);
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
  useEffect(() => {
    if (state?.success) {
      //@ts-ignore
      setInput("");
    }
  }, [state]);
  return (
    <form action={formAction} className="h-14 relative" ref={formRef}>
      <input
        type="text"
        className="indent-5 rounded-full w-full h-full border border-primary outline-none"
        value={input}
        name="content"
        onChange={handleChange}
        placeholder="Type a Message"
      />
      <input type="hidden" name="receiverId" value={receiverId} />
      <input type="hidden" name="ownerId" value={ownerId} />
      <div className="flex">
        {input && (
          <Button
            variant={"ghost"}
            size={"sm"}
            type="submit"
            className="absolute text-primary right-10 top-0 bottom-0 my-auto cursor-pointer"
          >
            <SendHorizontal />
          </Button>
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
    </form>
  );
}

export default MessageInput;
