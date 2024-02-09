import { Separator } from "@/components/ui/separator";
import SidebarHeader from "./SidebarHeader";
import ActiveSection from "./ActiveSection";
import UsersList from "./UsersList";
import { Suspense } from "react";
import { getUsers } from "@/lib/actions/getUsers";
import { auth } from "@/lib/auth";
import { UserType } from "@/lib/types";

async function SideBar() {
  const session = await auth();
  const id = session?.user?.id as string;
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
      {users.map((user: UserType, idx: number) =>
        user._id == id ? (
          ""
        ) : (
          <Suspense fallback={<div>loading..</div>} key={idx}>
            <UsersList user={user} />
          </Suspense>
        )
      )}
    </div>
  );
}

export default SideBar;
