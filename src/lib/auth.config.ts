import { NextRequest, NextResponse } from "next/server";
interface auth {
  auth: any;
  request: NextRequest;
}
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({ auth, request }: auth) {
      const user = auth?.user;
      const path = request.nextUrl.pathname;
      const authPages = ["/login", "/"];
      //ONLY LOGED USER CAN ACCESS
      if (!user && !authPages.includes(path)) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      //ONLY UNAUTHENTICATED USER CAN ACCESS
      if (user && authPages.includes(path)) {
        return NextResponse.redirect(new URL(`/${user?.email}`, request.url));
      }
      return true;
    },
  },
};