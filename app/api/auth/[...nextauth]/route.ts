import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { getUserByEmail, getUserGroupByEmail } from '../../../staff/planetscale';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        }
      }
    })
  ],
  callbacks: {
    async signIn(params: any) {
      const { email } = params.user;
      const user = await getUserByEmail(email);
      if (user) {
        return true;
      }

      return false;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
