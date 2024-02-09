import { MoreVertical, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function MainContentHeader() {
  return (
    <div className="flex w-full h-fit my-3 items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="animate-pulse bg-slate-800"></AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">Jack P.Angulo</p>
          <p className="text-xs text-slate-400">last seen at 07:15 PM</p>
        </div>
      </div>
      <div className="flex items-center h-full gap-2">
        <Phone className="scale-90 opacity-70 cursor-pointer" />
        <MoreVertical className="scale-90 opacity-70 cursor-pointer" />
      </div>
    </div>
  );
}

export default MainContentHeader;
