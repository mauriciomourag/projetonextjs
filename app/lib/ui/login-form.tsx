"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/app/lib/infra/usuarios";
import Image from "next/image";
import Laptop from "./test.jpg";
import Google from "./google.png";

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl text-[#6fc1dd] font-bold p-2">Bem Vindo</span>
            <span className="font-light text-gray-400 mb-8">
              Faça o login com suas credenciais
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Senha</span>
              <input
                type="password"
                name="senha"
                id="senha"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Lembrar por 30 dias</span>
              </div>
              <span className="font-bold text-md">Esqueceu a Senha?</span>
            </div>
            <button className="w-full bg-[#6fc1dd] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Entrar
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <Image src={Google} alt="" className="w-6 h-6 inline mr-2" />
              Entrar com o Google
            </button>
            <div className="text-center text-gray-400">
              Não tem uma conta?
              <span className="font-bold text-black"> Cadastrar</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src={Laptop}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
