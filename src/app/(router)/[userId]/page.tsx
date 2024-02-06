import React from "react";

function page({ params }: { params: { userId: string } }) {
  return <div>{params.userId}</div>;
}

export default page;
