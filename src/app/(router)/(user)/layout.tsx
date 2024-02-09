"use client";
import ContactInfoHeader from "@/components/UiComponents/ContactInfoHeader";
import ContactInfoMain from "@/components/UiComponents/ContactInfoMain";
import MainContentHeader from "@/components/UiComponents/MainContentHeader";
import { Separator } from "@radix-ui/react-separator";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <Separator />
      {children}
    </div>
  );
}

export default layout;
