import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import {getUsuarioPorEmail} from './app/lib/infra/usuarios';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), senha: z.string().min(5) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, senha } = parsedCredentials.data;

                    const usuario = await getUsuarioPorEmail(email);
                    if (!usuario) return null;

                    const senhaOk = await bcrypt.compare(senha, usuario.senha);
                    if (senhaOk) return usuario;
                }

                console.log('Login inválido');
                return null;
            },
        }),
    ],
});
