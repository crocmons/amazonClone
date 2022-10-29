import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google"
import FacebookProviders from "next-auth/providers/facebook"
export default NextAuth({
    providers:[
        GoogleProviders({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        }),
        FacebookProviders({
            clientId:process.env.FACEBOOK_ID,
            clientSecret:process.env.FACEBOOK_SECRET,
        })
    ]
})