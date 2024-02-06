import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./SidebarHeader";
import ActiveSection from "./ActiveSection";
import UsersList from "./UsersList";

function SideBar() {
  return (
    <div className="flex flex-col gap-2">
      {/* //sidebar header */}
      <div className="h-[50px] flex items-center p-2">
        <SidebarHeader />
      </div>
      {/* //sidebar header */}
      <Separator />
      <div className="h-[50px] flex items-center p-2">
        <ActiveSection />
      </div>
      <Separator />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
    </div>
  );
}

export default SideBar;
