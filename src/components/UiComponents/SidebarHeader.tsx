import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, MoreHorizontal, Search } from "lucide-react";

function SidebarHeader() {
  return (
    <div className="flex justify-between w-full h-full">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="animate-pulse"></AvatarFallback>
      </Avatar>
      <div className="flex gap-2 h-full items-center">
        <Search className="scale-75 opacity-40" />
        <Bell className="scale-75 opacity-40" />
        <MoreHorizontal className="scale-75 opacity-40" />
      </div>
    </div>
  );
}

export default SidebarHeader;
