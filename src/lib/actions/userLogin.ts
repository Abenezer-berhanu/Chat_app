"use server";
import { signIn } from "../auth";

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleGoogleLogin = async () => {
  "use server";
  await signIn("google");
};
export const handleCredentialsLogin = async (formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);
  //@ts-ignore
  await signIn("credentials", { email, password });
};
