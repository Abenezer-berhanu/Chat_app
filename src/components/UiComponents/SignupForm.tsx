"use client";
import { useEffect } from 'react';
import {useFormState} from 'react-dom'
// import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";

function SignupForm() {
//   const handleUpload = (result: CldUploadWidgetResults) => {
//     const info = result.info;
//     console.log(info);
//   };
const [state, formAction] = useFormState(increment, null)

useEffect(() => {
    
},[])


  return (
    <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="fullName"
          required
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          User Name
        </label>

        <input
          type="text"
          id="username"
          name="userName"
          required
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          required
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          required
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="PasswordConfirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Password Confirmation
        </label>

        <input
          type="password"
          id="PasswordConfirmation"
          name="passwordConfirmation"
          required
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>

        <input
          type="text"
          id="country"
          name="country"
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>

        <textarea
          id="bio"
          name="bio"
          className="mt-1 w-full rounded-md bg-white outline-none p-2 border border-primary text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="flex w-full flex-col col-span-6 gap-1">
        <label className="text-black text-sm font-semibold tracking-wider">
          Thumbnail:
        </label>
        {/* <CldUploadButton
          uploadPreset={`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`}
          onUpload={handleUpload}
          className="w-full border border-primary bg-primary text-white h-20 rounded-md"
        ></CldUploadButton> */}
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="text-gray-700 underline">
            {" "}
            terms and conditions{" "}
          </a>
          and
          <a href="#" className="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <a href="#" className="text-gray-700 underline">
            Log in
          </a>
          .
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
