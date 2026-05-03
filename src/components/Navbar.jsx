"use client";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="navbar bg-[#0F172A] text-white sticky top-0 z-50 shadow-lg px-4">
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F59E0B] font-bold text-2xl"
        >
          <FaBookOpen size={28} />
          <span>BookNest</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-[#F59E0B] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className="hover:text-[#F59E0B] transition-colors duration-200"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="hover:text-[#F59E0B] transition-colors duration-200"
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.name}>
              <div className="avatar hidden lg:block">
                <div className="w-9 rounded-full ring ring-[#F59E0B] ring-offset-2 ring-offset-[#0F172A]">
                  <Image
                    src={
                      user.image ||
                      `https://ui-avatars.com/api/?name=${user.name}&background=F59E0B&color=0F172A`
                    }
                    width={36}
                    height={36}
                    alt={user.name}
                  />
                </div>
              </div>
            </div>
            <span className="text-sm font-medium text-[#F59E0B] hidden lg:block">
              {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-[#0F766E] hover:bg-[#0d6460] text-white border-none"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold border-none"
          >
            Login
          </Link>
        )}
        <div className="relative lg:hidden">
          <button
            className="btn btn-ghost text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
          {menuOpen && (
            <ul className="menu menu-sm absolute right-0 mt-3 z-50 p-2 shadow bg-[#0F172A] rounded-box w-52 gap-1">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-books" onClick={() => setMenuOpen(false)}>
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                  My Profile
                </Link>
              </li>
              {user && (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
