import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const githubID = process.env.NEXT_PUBLIC_GITHUB_ID;
const githubPW = process.env.NEXT_PUBLIC_GITHUB_PW;
const githubJWT = process.env.NEXT_PUBLIC_JWT_PW;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: githubID,
      clientSecret: githubPW,
    }),
  ],
  secret: githubJWT,
};
export default NextAuth(authOptions);
