import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
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
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
