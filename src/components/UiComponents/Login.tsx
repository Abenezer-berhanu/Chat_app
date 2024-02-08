import Image from "next/image";
import { Button } from "../ui/button";
import { signIn } from "@/lib/auth";


async function Login() {
  const handleGitHubLogin = async () => {
    "use server";
    await signIn("github");
  };
  const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
  };
  const handleCredentialsLogin = async (formData:FormData) => {
    const {email, password} = Object.fromEntries(formData)
    "use server";
    //@ts-ignore
    await signIn("credentials", { email, password });
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen ">
        <section className="relative flex items-end bg-gray-900 h-full col-span-12">
          <Image
            width={1000}
            height={1000}
            alt="login image"
            src="https://images.unsplash.com/photo-1576297185621-93ed9df5ca9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <h2 className="font-bold text-4xl absolute text-center w-full text-white top-10">
            Sign In
          </h2>
        </section>

        <main className="flex items-center justify-center py-8 lg:py-12 col-span-12 absolute m-auto left-0 right-0 top-0 bottom-0 backdrop-blur-sm bg-white/30 max-w-[450px] h-fit">
          <div className="w-full max-w-[330px]">
            <p className="font-semibold tracking-wider mb-2">
              Welcome to AbenuChat
            </p>
            <div className="flex flex-col justify-center space-y-2 col-span-6">
              <form action={handleGoogleLogin} className="w-full">
                <button className="flex w-full items-center px-4 py-2 bg-blue-500 text-white rounded-md">
                  <Image
                    width={1000}
                    height={1000}
                    priority
                    src="/google_logo.png"
                    alt="Google logo"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              </form>
              <form action={handleGitHubLogin} className="w-full">
                <button className="flex w-full tems-center px-4 py-2 bg-slate-800 text-white rounded-md">
                  <Image
                    width={1000}
                    height={1000}
                    priority
                    src="/github_logo.png"
                    alt="GitHub logo"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with GitHub
                </button>
              </form>
            </div>

            <form action={handleCredentialsLogin} className="mt-8 grid grid-cols-6 gap-4">
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
                <Button className="w-full h-10">Login</Button>

                <p className="mt-4 text-sm text-white sm:mt-0">
                  Don{"'"}t have an account &nbsp;
                  <a href="#" className="text-primary font-semibold underline">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
