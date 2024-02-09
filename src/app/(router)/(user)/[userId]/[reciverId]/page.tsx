import ContactConversations from "@/components/UiComponents/ContactConversations";
import ContactInfoHeader from "@/components/UiComponents/ContactInfoHeader";
import ContactInfoMain from "@/components/UiComponents/ContactInfoMain";
import Loading from "@/components/UiComponents/Loading";
import MainContentHeader from "@/components/UiComponents/MainContentHeader";
import MessageInput from "@/components/UiComponents/MessageInput";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function page({
  params,
}: {
  params: { userId: string; reciverId: string };
}) {
  const session= await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="grid grid-cols-9 gap-3">
      {params?.reciverId ? (
        <>
          <div className="col-span-6 max-lg:col-span-8 min-h-[750px] justify-start flex flex-col gap-4">
            <Suspense fallback={<Loading />}>
              <MainContentHeader receiverId={params.reciverId} />
            </Suspense>
            <ContactConversations id={session?.user?.id} receiverId={params.reciverId} />
            <MessageInput id={session?.user?.id} receiverId={params.reciverId} />
          </div>
          <div className="col-span-3 max-lg:col-span-0 flex flex-col gap-2 justify-center h-fit max-lg:hidden">
            <ContactInfoHeader receiverId={params.reciverId} />
            <Separator />
            <ContactInfoMain receiverId={params.reciverId} />
          </div>
        </>
      ) : (
        <div className="col-span-9">Invalid Input Of User!</div>
      )}
    </div>
  );
}

export default page;
