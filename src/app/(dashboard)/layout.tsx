import { SideBar } from "@/app/components/sidebar";
import { NavBar } from "@/app/components/navBar";
import { ReactNode } from "react";

const routes = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "home",
  },
  {
    path: "/calls",
    label: "Llamadas",
    icon: "phone",
  },
  {
    path: "/upload",
    label: "Subir archivos",
    icon: "file",
  },
];

export default function NexaTalkLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar routes={routes} />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
