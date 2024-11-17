import {NavBar} from "@/app/components/navBar";

export default function DashboardLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar isDashboard={true} />
      {children}
    </>
  )
}
