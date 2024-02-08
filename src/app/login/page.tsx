import { auth, signIn } from "@/lib/auth";

async function login() {
  const session = await auth();
  const handleGitHubLogin = async () => {
    "use server";
    await signIn("github");
  };
  const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
  };
  return (
    <>
      <form action={handleGitHubLogin}>
        <button>Login</button>
      </form>
      <form action={handleGoogleLogin}>
        <button>Login google</button>
      </form>
    </>
  );
}

export default login;
