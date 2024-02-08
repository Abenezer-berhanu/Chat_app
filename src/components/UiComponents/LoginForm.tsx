"use client";
import { handleCredentialsLogin } from "@/lib/actions/userLogin";
import { Button } from "../ui/button";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const [state, formAction] = useFormState(handleCredentialsLogin, null);

  useEffect(() => {
    if(state?.error){
        toast.error('invalid credentials')
    }
  },[state])

  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-4">
      <div className="col-span-6">
        <label
          htmlFor="FirstName"
          className="block text-md font-semibold text-black"
        >
          Email
        </label>

        <input
          type="text"
          id="FirstName"
          name="email"
          className="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-black font-semibold shadow-sm p-2 pr-0 outline-none"
        />
      </div>

      <div className="col-span-6">
        <label
          htmlFor="Password"
          className="block text-md font-semibold text-black"
        >
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          className="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-black font-semibold shadow-sm p-2 pr-0 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-6 sm:items-center sm:gap-4">
        <Button className="w-full h-10" type="submit">
          Login
        </Button>
        <p className="mt-4 text-sm text-white sm:mt-0">
          Don{"'"}t have an account &nbsp;
          <Link href="/" className="text-primary font-semibold underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
