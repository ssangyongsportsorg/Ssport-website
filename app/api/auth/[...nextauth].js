import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import DiscordProvider from "next-auth/providers/discord"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),  
     LineProvider({
      clientId: process.env.Line_ID,
      clientSecret: process.env.Line_SECRET,
    }),  
  DiscordProvider({
      clientId: process.env.Discord_ID,
      clientSecret: process.env.Discord_SECRET,
    }),  ],
  theme: {
  logo: "/logo.png", // Absolute URL to image
},
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
    },
    
  },
}



export default NextAuth(authOptions)
