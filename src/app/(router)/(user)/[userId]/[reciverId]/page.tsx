import ContactConversations from "@/components/UiComponents/ContactConversations";
import ContactInfoHeader from "@/components/UiComponents/ContactInfoHeader";
import ContactInfoMain from "@/components/UiComponents/ContactInfoMain";
import MainContentHeader from "@/components/UiComponents/MainContentHeader";
import MessageInput from "@/components/UiComponents/MessageInput";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

async function page({ params }: { params: { userId: string } }) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="grid grid-cols-8 gap-3">
      <div className="col-span-5 max-lg:col-span-8 min-h-[750px] justify-start flex flex-col gap-4">
        <MainContentHeader />
        <ContactConversations />
        <MessageInput />
      </div>
      <div className="col-span-3 max-lg:col-span-0 flex flex-col gap-2 justify-center h-fit max-lg:hidden">
        <ContactInfoHeader />
        <Separator />
        <ContactInfoMain />
      </div>
    </div>
  );
}

export default page;
