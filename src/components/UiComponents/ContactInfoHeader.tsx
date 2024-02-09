import React from "react";

function ContactInfoHeader({ receiverId }: { receiverId: string }) {
  return (
    <div className="h-[30px] my-3">
      <h1 className="font-bold text-xl">Contact Info</h1>
    </div>
  );
}

export default ContactInfoHeader;
