import { Globe, MapPin, Smartphone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { UserType } from "@/lib/types";
import { getActiveUserInfo } from "@/lib/actions/getUsers";

async function ContactInfoMain({ receiverId }: { receiverId: string }) {
  //@ts-ignore
  const user:UserType = await getActiveUserInfo(receiverId);
  return (
    <div className="p-5 flex flex-col gap-2 border">
      <div className="flex flex-col gap-8 items-center">
        <Avatar className="scale-150 mx-auto">
          <AvatarImage src={user.image}/>
          <AvatarFallback className="animate-pulse bg-slate-800"></AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-xl capitalize">{user.fullName}</p>
          <p className="text-sm text-slate-400 text-center">{user?.bio}</p>
          <p className="text-sm text-slate-400 text-center">{user.country}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"#"}>
          <InstagramLogoIcon className="scale-125" />
        </Link>
      </div>
      <Separator className="mt-5" />
      <div className="flex flex-col gap-3">
        <span className="flex gap-1 items-center">
          <Smartphone className="text-slate-500 scale-90" />
          <p className="text-sm text-slate-600">+251954704213</p>
        </span>
        <span className="flex gap-1 items-center">
          <Globe className="text-slate-500 scale-90" />
          <p className="text-sm text-slate-600">https://www.example.com</p>
        </span>
      </div>
      <Separator />
    </div>
  );
}

export default ContactInfoMain;
