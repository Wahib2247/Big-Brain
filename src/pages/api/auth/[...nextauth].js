import NextAuth from "next-auth/next";
import githubprov from "next-auth/providers/github"
import credentialsprov from "next-auth/providers/credentials"
import { usersModel as User } from "@/models/users.model";
import { connectToDatabase } from "@/lib/mondoDB";

connectToDatabase()

export default NextAuth({
    providers: [
        githubprov({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            async authorize(credentials) {
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error('No user found with that email');
                }

                //add hashed password verification
                if (!await user.comparePassword(credentials.password)) {
                    throw new Error('Invalid password');
                }

                return { id: user.id, email: user.email, name: user.name, username: user.username }
            }
        }),

        credentialsprov({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error('No user found with that email');
                }

                // add hashed password verification
                if (!await user.comparePassword(credentials.password)) {
                    throw new Error('Invalid password');
                }

                return { id: user.id, email: user.email, name: user.name, username: user.username };
            }
        })
    ],
    callbacks: {
        async session(session, user) {
            session.user = user;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        }
    },
    pages: {
        signIn: '/login',
    }
})