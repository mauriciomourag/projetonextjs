'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { Usuario } from '../domain/usuarios';
import { sql } from '@vercel/postgres';

export async function login(prevState: string | undefined, formData: FormData,) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Login Inválido.';
        }
        throw error;
    }
}

export async function getUsuarioPorEmail(email: string): Promise<Usuario | undefined> {
    try {
        const usuario = await sql<Usuario>`SELECT * FROM usuarios WHERE email=${email}`;
        return usuario.rows[0];
    } catch (erro) {
        console.error('Erro na consulta de usuario:', erro);
        throw new Error('Erro na consulta de usuario.');
    }
}