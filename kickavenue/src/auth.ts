/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./app/helpers/auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          if (!user) throw new Error("wrong email/password");

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
    Google({
      authorization: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }),
  ],
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider == "google") {
        return profile?.email_verified || false;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.email = user.email;
        token.img_src = user.img_src;
        token.role = user.role;
        token.access_token = user.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.img_src = token.img_src as string;
        session.user.first_name = token.first_name as string;
        session.user.last_name = token.last_name as string;
        session.user.role = token.role as string;
        session.user.access_token = token.access_token as string;
      }

      return session;
    },
  },
});
