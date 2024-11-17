"use client";

import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8 max-h-80">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-24 justify-center items-center justify-self-center">
        <Link href='/matricula' className="scale-110 transition-all duration-200 hover:scale-100">
          <div className="p-8 justify-center justify-self-center">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/matricula.png"
              alt="Next.js logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-2xl justify-self-center">Matrícula</h2>
        </Link>
        <Link href='/horario' className="scale-110 transition-all duration-200 hover:scale-100">
          <div className="p-8 justify-center justify-self-center">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/horario.png"
              alt="Next.js logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-2xl justify-self-center">Horario</h2>
        </Link>
        <Link href='/calificaciones' className="scale-110 transition-all duration-200 hover:scale-100">
          <div className="p-8 justify-center justify-self-center">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/calificaciones.png"
              alt="Next.js logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-2xl justify-self-center">Calificaciones</h2>
        </Link>
        <Link href='/evaluacion' className="scale-110 transition-all duration-200 hover:scale-100">
          <div className="p-8 justify-center justify-self-center">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/evaluacion.png"
              alt="Next.js logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-2xl justify-self-center">Evaluación profesoral</h2>
        </Link>
      </div>
    </div>
  );
}
