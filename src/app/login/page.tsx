import Login from "@/components/UiComponents/Login";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "lorem ipsum",
};

async function login() {
  const session: any | null = await auth();
  if (session) {
    redirect(`/${session?.user?.email}`);
  }
  return (
    <>
      <Login />
    </>
  );
}

export default login;
