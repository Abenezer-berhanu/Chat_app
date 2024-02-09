import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import MyAccount from "./MyAccount";
import { auth } from "@/lib/auth";

async function SidebarHeader() {
  return (
    <div className="flex justify-between w-full h-full">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="animate-pulse"></AvatarFallback>
      </Avatar>
      <div className="flex gap-2 h-full items-center">
        <Search className="scale-75 opacity-40 cursor-pointer" />
        <Bell className="scale-75 opacity-40 cursor-pointer" />
        <MyAccount />
      </div>
    </div>
  );
}

export default SidebarHeader;
