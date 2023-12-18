import { signOut } from '@/auth';

export default function Protegido() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Área Protegida</h1>
        <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
          <form action={async () => { 'use server'; await signOut(); }} method="post">
            <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
