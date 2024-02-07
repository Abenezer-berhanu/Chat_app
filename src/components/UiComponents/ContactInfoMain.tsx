import { Globe, MapPin, Smartphone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "../ui/separator";

function ContactInfoMain() {
  return (
    <div className="p-5 flex flex-col gap-2">
      <div className="flex flex-col gap-8 items-center">
        <Avatar className="scale-150 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="animate-pulse"></AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-xl capitalize">Jack P.Angulo</p>
          <p className="text-sm text-slate-400 text-center">This is my bio</p>
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
          <p className="text-sm text-slate-600">+251954703224</p>
        </span>
        <span className="flex gap-1 items-center">
          <Globe className="text-slate-500 scale-90" />
          <p className="text-sm text-slate-600">https://www.example.com</p>
        </span>
        <span className="flex gap-1 items-center">
          <MapPin className="text-slate-500 scale-90" />
          <p className="text-xs text-slate-600">
            2519 Busrnside Court, HORICON, WI, 53032
          </p>
        </span>
      </div>
      <Separator />
    </div>
  );
}

export default ContactInfoMain;
