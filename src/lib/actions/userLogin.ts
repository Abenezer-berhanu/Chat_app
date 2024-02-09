"use server";
import { signIn } from "../auth";

export const handleGitHubLogin = async () => {
  try {
    await signIn("github");
  } catch (error) {
    console.log(error);
    throw error
  }
};
export const handleGoogleLogin = async () => {
  try {
    await signIn("google");
  } catch (error) {
    console.log(error);
    throw error
  }
};
export const handleCredentialsLogin = async (
  currentState: any,
  formData: FormData
) => {
  try {
    const { email, password } = Object.fromEntries(formData);
    //@ts-ignore
    await signIn("credentials", { email, password });
  } catch (error: any) {
    if (error.name.includes("CredentialsSignin")) {
      return { error: "invalid credentials" };
    }
    throw error;
  }
};
