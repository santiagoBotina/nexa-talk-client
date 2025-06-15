export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        404 - Página no encontrada
      </h1>
      <p className="mt-4 text-gray-600">
        Lo sentimos, la página que buscas no existe.
      </p>
      <a href="/dashboard" className="mt-6 text-blue-500 hover:underline">
        Volver al inicio
      </a>
    </div>
  );
}
