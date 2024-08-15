import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: "ukBmbOJeT3V9/S20ypM99o5bctCrI9n4fRNdkjjc1Dc=",
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: "Iv23liTHOdGMPhbv54VD",
      clientSecret: "902ec93d8cfe1c52794b2ee721dd44ad0d39023b",
      profile: (profile) => {
        return {
          image: profile.avatar_url,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
});
