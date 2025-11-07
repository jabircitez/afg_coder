import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma as any),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      },
      from: process.env.SMTP_FROM
    })
  ],
  callbacks: {
    async session({ session, user }) {
      (session.user as any).email = user.email
      ;(session.user as any).role = (user as any).role || 'USER'
      return session
    }
  },
  events: {
    async createUser({ user }) {
      if (user.email === 'jabircitez88@gmail.com') {
        await prisma.user.update({ where: { id: user.id }, data: { role: 'ADMIN' } })
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})