import Image from "next/image";

export default function NexaTalkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-7">
          <h1 className="text-xl font-semibold text-gray-900">Nexa-Talk</h1>
        </div>

        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-blue-50 rounded-lg border border-blue-100">
              <Image
                src={"icons/phone.svg"}
                alt="Phone Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <a href={"/calls"}>Llamadas</a>
            </div>

            <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Image
                src={"icons/upload.svg"}
                alt="Upload Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <a href={"/upload"}>Subir archivos</a>
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Image
              src={"icons/logout.svg"}
              alt="Logout Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Logout
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={"icons/nexa-talk-logo.svg"}
                alt="Nexa talk logo"
                width={20}
                height={20}
                className="mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"></div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
