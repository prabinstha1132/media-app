import NextAuth from "next-auth";
import google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../db";
import { compare } from "bcryptjs";


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  }),
  CredentialsProvider({
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "password", type: "password" }
    },
    authorize: async (credentials) => {
      const email = credentials.email as string | undefined
      const password = credentials.password as string | undefined       //we are taking email and password from login field from user
      if (!email || !password) {
        throw new Error("you must provide email and password")
      }
      const user = await db.user.findUnique({   //we are checking uniuque user in our database
        where: { email:email },   
        select: {
          password: true,
          firstname: true,
          lastname: true,
          email: true,
          role: true,
        }
      })
      if (!user) {
        throw new Error("Invalid email and password")
      }
      if (!user.password) {
        throw new Error("you must provide password")
      }

      const isMatched = await compare(password, user.password)  //we are cfomparing hashed password and actual user password
      if (!isMatched) {
        throw new Error("password not matched");
      }
      const userData = {
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        role: user.role,
      }
      return userData;

    }
  })

  ],
  pages:{
    signIn: "/login",
  
  }  
})