import { auth, signIn } from "@/lib/auth";

async function login() {
  const session = await auth();
  const handleGitHubLogin = async () => {
    "use server";
    await signIn("github");
  };

  console.log(session);
  return (
    <form action={handleGitHubLogin}>
      <button>Login</button>
    </form>
  );
}

export default login;
