import { NextAuthOptions } from "next-auth";



export const authOptions = {
    providers: [
        // Providers.Email({
        //   server: process.env.EMAIL_SERVER,
        //   from: process.env.EMAIL_FROM,
        // }),
        // ...add more providers here
    ],
} satisfies NextAuthOptions;