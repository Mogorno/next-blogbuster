import User from '@/models/User';
import connect from '@/utils/db';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                try {
                    await connect();

                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (!user) throw new Error('User not found!');

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!isPasswordCorrect)
                        throw new Error('Wrong Credentials');

                    const res = {
                        name: user.name,
                        email: user.email,
                        id: user.id,
                        img: user.img,
                    };

                    return res;
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token && token.sub) {
                try {
                    const user = await User.findById(token.sub);

                    if (user) {
                        session.user = {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            img: user.img,
                        };
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }

            return session;
        },
    },

    pages: {
        error: '/dashboard/login',
    },
});

export { handler as GET, handler as POST };
