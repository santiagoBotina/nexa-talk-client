"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { deleteSession, getCookie, LoginPayload } from "@/app/_lib/sessions";

export function NavBar({ isDashboard }: { isDashboard?: boolean }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [student, setStudent] = useState<LoginPayload | null>(null);

  useEffect(() => {
    const fetchStudentFromCookies = async () => {
      const cookie = await getCookie("session");

      if (cookie) {
        setStudent(cookie);
      }
    };

    fetchStudentFromCookies();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    const deleteCookie = async () => {
      await deleteSession();
    };

    deleteCookie();
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/unicuces-logo.png"
              width={200}
              height={200}
              alt="logo unicuces"
            />
          </Link>
          {!isDashboard && (
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <button
                type="button"
                className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-icon="SvgArrowLeft2"
                  aria-hidden="true"
                >
                  <path d="M10.911 6.556L5 12m0 0h14M5 12l5.911 5.444"></path>
                </svg>
                Regresar
                <span className="sr-only">return</span>
              </button>
            </Link>
          )}
        </div>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              src="/generic-user.jpg"
              width={50}
              height={30}
              alt="user avatar"
            />
          </button>
          {student && isDropdownOpen && (
            <div className="absolute right-50 top-20 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {student.legalID}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {student.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                  >
                    Perfil
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                  >
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
