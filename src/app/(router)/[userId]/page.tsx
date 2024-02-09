import ContactConversations from "@/components/UiComponents/ContactConversations";
import ContactInfoHeader from "@/components/UiComponents/ContactInfoHeader";
import ContactInfoMain from "@/components/UiComponents/ContactInfoMain";
import MainContentHeader from "@/components/UiComponents/MainContentHeader";
import MessageInput from "@/components/UiComponents/MessageInput";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

async function page({ params }: { params: { userId: string } }) {
  const session = await auth()
  if(!session){
    redirect('/login')
  }
    
  return (
    <div className="grid grid-cols-8 gap-2 h-full">
      <div className="flex flex-col col-span-6 gap-2">
        <div className="h-[50px]">
          <MainContentHeader />
        </div>
        <Separator />
        <ContactConversations />
        <MessageInput />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <ContactInfoHeader />
        <Separator />
        <ContactInfoMain />
      </div>
    </div>
  );
}

export default page;
