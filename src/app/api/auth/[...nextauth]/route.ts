// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    // Google Auth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // Credentials Auth
    /*CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const dummyUser = {
          id: "1",
          name: "Dummy User",
          email: "Dummy@xyz.com",
          password: "Dummy1234"
        };

        if (
          credentials?.email === dummyUser.email &&
          credentials?.password === dummyUser.password
        ) {
          return { id: dummyUser.id, name: dummyUser.name, email: dummyUser.email };
        }

        return null;
      },
    }),*/
  ],
  pages: {
    signIn: "/", // Your login page path
    error: "/"
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
