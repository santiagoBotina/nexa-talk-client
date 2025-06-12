import { SideBar } from "@/app/components/sidebar";
import { NavBar } from "@/app/components/navBar";
import { ReactNode } from "react";

export default function NexaTalkLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
