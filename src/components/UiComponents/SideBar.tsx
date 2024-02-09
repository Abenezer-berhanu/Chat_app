import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./SidebarHeader";
import ActiveSection from "./ActiveSection";
import UsersList from "./UsersList";
import { Suspense } from "react";
import { getUsers } from "@/lib/actions/getUsers";

interface UserType {
  _id: number;
  fullName: string;
  email: string;
  image: string;
  country: string;
}

async function SideBar() {
  const users: any = await getUsers();
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
      {users.map((user: UserType, idx: number) => (
        <Suspense fallback={<div>loading..</div>}>
          <UsersList user={user} key={idx} />
        </Suspense>
      ))}
    </div>
  );
}

export default SideBar;
