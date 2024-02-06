import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function ContactConversations() {
  return (
    <div className="h-full w-full rounded-md border shadow-sm shadow-primary p-2 flex flex-col gap-3">
      {/* contact conversation */}
      <div className="w-full">
        <p className="bg-primary rounded-lg text-white w-fit max-w-[80%] rounded-bl-none p-2 text-sm">
          hELLO thERE
        </p>
        <p className="text-xs text-slate-400">10:10 PM</p>
      </div>

      {/* owner conversation */}
      <div className="w-fit max-w-[80%] ml-auto">
        <p className="bg-slate-200 rounded-lg text-black  rounded-br-none p-2 text-sm ml-auto">
          hELLO thERE
        </p>
        <p className="text-xs text-slate-400 text-end">10:10 PM</p>
      </div>

      {/* input tag */}
    </div>
  );
}

export default ContactConversations;
