import {NavBar} from "@/app/components/navBar";

export default function HorarioLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
