import React from "react";

function ActiveSection() {
  return (
    <div className="flex w-full gap-2">
      <a
        className="w-1/2 text-center inline-block rounded border border-indigo-600 bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="/"
      >
        Personal
      </a>
      <a
        className="w-1/2 text-center inline-block rounded border border-indigo-600 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="/"
      >
        Group
      </a>
    </div>
  );
}

export default ActiveSection;
