import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/users.model";
import { connectToDatabase } from "@/lib/mondoDB";

// Ensure database connection
connectToDatabase();

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            async profile(profile) {
                return {
                    id: profile.id,
                    email: profile.email,
                    name: profile.name,
                    username: profile.login,
                    picture: profile.avatar_url,
                };
            },
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await User.findOne({ email: credentials.email }).select('+password'); // Ensure password is included

                if (!user) {
                    throw new Error('No user found with that email');
                }

                // Verify hashed password
                if (!await user.comparePassword(credentials.password)) {
                    throw new Error('Invalid password');
                }

                return { id: user.id, email: user.email, name: user.name, username: user.username };
            }
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'github') {
                const existingUser = await User.findOne({ email: user.email });

                if (!existingUser) {
                    // Create a new user if not exists
                    await User.create({
                        email: user.email,
                        name: user.name,
                        username: user.username,
                        picture: user.picture,
                    });
                }
            } else if (account.provider === 'credentials') {
                const existingUser = await User.findOne({ email: user.email });

                if (!existingUser) {
                    // Create a new user if not exists
                    await User.create({
                        email: user.email,
                        name: user.name,
                        username: user.username,
                        picture: user.picture,
                        password: user.password, // Ensure password is properly hashed
                    });
                }
            }

            return true; // Proceed with authentication
        },
        async session({ session, user }) {
            session.user = user;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl; // Redirect to base URL after sign-in
        }
    },
    pages: {
        signIn: '/login', // Path to the sign-in page
    }
});
