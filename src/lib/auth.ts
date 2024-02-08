import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./config/connectDB";
import userModel from "./models/userModel";
import bcrypt from "bcrypt";

const getUser = async (email: string) => {
  const existUser = await userModel.findOne({ email }).lean();
  return existUser;
};

const login = async (credentials: { email: string; password: string }) => {
  console.log(credentials.email);
  try {
    await connectDB();
    const existUser: any = await getUser(credentials.email);
    if (!existUser) {
      throw new Error("invalid credentials");
    }
    const passwordMatch = await bcrypt.compare(
      credentials.password,
      existUser?.password
    );
    if (!passwordMatch) {
      throw new Error("invalid credentials");
    }
    return existUser;
  } catch (error) {
    console.log(error);
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      //@ts-ignore
      async authorize(credentials: { email: string; password: string }) {
        try {
          const user = await login(credentials);
          const dataToBeReturned = {
            name: user.fullName,
            email: user.email,
            image: user.image,
            id: user._id,
          };
          return dataToBeReturned;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    //@ts-ignore
    async session({ session }: any) {
      await connectDB();
      const existUser = await userModel
        .findOne({ email: session?.user?.email })
        .lean();
      if (existUser) {
        //@ts-ignore
        session.user.id = existUser._id;
        //@ts-ignore
        session.user.isAdmin = existUser.isAdmin;
      }
    },
    //@ts-ignore
    async signIn({ account, profile }: any) {
      if (account?.provider == "github" || account?.provider == "google") {
        const provider = account?.provider;
        let email = profile?.email; //for google it's profile?.email  for github it's in profile?.email
        let fullName: string = ""; //for google it's profile?.name   for github it's in profile?.login
        let image: string = ""; //for goggle it's profile?.picture   for github it's in profile?.avatar_url
        try {
          await connectDB();
          const existUser = await getUser(email);
          if (existUser) {
            return existUser;
          }
          if (provider == "google") {
            fullName = profile?.name;
            image = profile?.picture;
          } else if (provider == "github") {
            fullName = profile?.login;
            image = profile?.avatar_url;
          }
          const newUserInfo = {
            email,
            fullName,
            image,
          };
          const newUser = new userModel(newUserInfo);
          const savedUser = await newUser.save();
          return savedUser;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
