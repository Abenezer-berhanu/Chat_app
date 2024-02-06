import SideBar from "@/components/UiComponents/SideBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      header
      <div className="grid grid-cols-10 gap-5 p-2">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-8 min-h-[750px] overscroll-y-scroll no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
