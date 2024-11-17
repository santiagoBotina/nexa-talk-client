"use client";
import Image from "next/image";
import { login } from "@/app/login/actions";
import { useActionState, useEffect } from "react";
import { verifySession } from "@/app/_lib/sessions";
import { redirect } from "next/navigation";

export default function Login() {
  useEffect(() => {
    verifySession().then((session) => {
      if (session) redirect("/dashboard");
    });
  }, []);

  const [state, action, pending] = useActionState(login);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-12 gap-20 sm:p-24 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/unicuces-logo.png"
        width={600}
        height={600}
        alt="logo unicuces"
      />
      <form className="w-full max-w-2xl" action={action}>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center w-full rounded-lg shadow-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              data-icon="SvgUser"
              aria-hidden="true"
            >
              <path d="M12 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0112 3zm6.2 18a9.257 9.257 0 00-1.825-5.65A5.593 5.593 0 0012 13h0a5.593 5.593 0 00-4.375 2.35A9.257 9.257 0 005.8 21h12.4z"></path>
            </svg>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-3 pl-4 text-gray-900 placeholder:text-gray-500 focus:ring-0 text-lg"
              placeholder="Usuario"
            />
          </div>
          <p className="block text-red-500">
            {state?.errors?.username ? state.errors.username : ""}
          </p>
          <div className="flex items-center w-full rounded-lg shadow-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              data-icon="SvgLock"
              aria-hidden="true"
            >
              <path d="M18.644 21h-13.2a.945.945 0 01-1-1v-7.2a.945.945 0 011-1h13.1a.945.945 0 011 1V20a.808.808 0 01-.225.725.966.966 0 01-.675.275zm-10.9-9.2V7.3a4.3 4.3 0 118.6 0v4.5m-4.3 3.7v2"></path>
            </svg>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="block flex-1 border-0 bg-transparent py-3 pl-4 text-gray-900 placeholder:text-gray-500 focus:ring-0 text-lg"
              placeholder="Contraseña"
            />
          </div>
          <p className="block text-red-500">
            {state?.errors?.password ? state.errors.password : null}
          </p>
          <button
            type="submit"
            className="w-full max-w-md rounded-lg bg-blue-900 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {pending ? "Validando..." : "Ingresar"}
          </button>
        </div>
      </form>
    </div>
  );
}
