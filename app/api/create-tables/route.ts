import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function GET(request: Request) {
    try {
        let hashedPassword = await bcrypt.hash("123456", 10);
        let result = await sql`
            INSERT INTO usuarios (nome, email, senha)
            VALUES ('Administrador', 'administrador@admin.com', ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}