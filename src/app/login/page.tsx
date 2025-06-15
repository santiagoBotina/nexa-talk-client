"use client";
import { login, LoginState } from "@/app/login/actions";
import { useActionState, useEffect } from "react";
import { verifySession } from "@/app/_lib/sessions";
import { redirect } from "next/navigation";
import { H1 } from "@/app/components/Title/h1";
import { Lock, User } from "lucide-react";
import { Logo } from "@/app/components/Logo";

export default function Login() {
  useEffect(() => {
    verifySession().then((session) => {
      if (session) redirect("/dashboard");
    });
  }, []);

  const initialState: LoginState = { errors: {}, success: false };
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Logo className="w-16 h-16" />
            </div>
          </div>
          <H1
            title="Bienvenido de nuevo"
            className="text-3xl font-bold text-gray-900 mb-2"
          />
          <p className="text-gray-600 text-sm">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>
        <form className="w-full max-w-2xl" action={action}>
          <div className="space-y-4">
            <label
              htmlFor="legalID"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              No. de Identificación
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="legalID"
                id="legalID"
                autoComplete="username"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ingresa tu número de identificación"
              />
              {state?.errors?.legalID && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.legalID}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              {state?.errors?.password && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={pending}
              className="w-full flex justify-center items-center py-4 px-6 border-0 rounded-2xl text-base font-semibold text-white bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-300/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:animate-pulse before:duration-1000"
            >
              {pending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Validando...
                </>
              ) : (
                "Ingresar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
