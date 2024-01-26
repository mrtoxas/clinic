import NextAuth, { User, DefaultSession, DefaultJWT } from "next-auth"
import { UserRole } from "@prisma/client"
import { JWT } from "next-auth/jwt"

interface IUser extends DefaultUser {
  id: string;
  role: UserRole;
}

declare module "next-auth" {
  interface User extends IUser { }
  interface Session {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user: {
      id: string;
      role: UserRole;
    };
  }
}


