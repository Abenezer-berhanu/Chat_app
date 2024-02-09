import { MoreVertical, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getActiveUserInfo } from "@/lib/actions/getUsers";
import { UserType } from "@/lib/types";

async function MainContentHeader({receiverId}: {receiverId:string}) {
  //@ts-ignore
  const user:UserType = await getActiveUserInfo(receiverId);
  return (
    <div className="flex w-full h-fit my-3 items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback className="animate-pulse bg-slate-800"></AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{user.fullName}</p>
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
