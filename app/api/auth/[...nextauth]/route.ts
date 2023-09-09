import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "../../../staff/planetscale";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                  scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                }
              },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return getUserByEmail(profile.email);
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      }
}

export const handler = NextAuth(authOptions);

export { handler  as GET, handler as POST};