import Link from "next/link";
import { FaBookOpen, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-[#0F172A] text-white mt-auto p-0">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#F59E0B] font-bold text-2xl"
          >
            <FaBookOpen size={26} />
            <span>BookNest</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            A seamless and modern platform to digitize your traditional library
            experience. Explore, borrow, and enjoy books digitally.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[#F59E0B] font-semibold text-lg">Quick Links</h3>
          <ul className="menu text-sm text-gray-400 p-0">
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
            <li>
              <Link
                href="/login"
                className="hover:text-[#F59E0B] transition-colors duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[#F59E0B] font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-400 text-sm">booknest@gmail.com</p>
          <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-gray-400 hover:text-[#F59E0B]"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-gray-400 hover:text-[#F59E0B]"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-gray-400 hover:text-[#F59E0B]"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-gray-700 w-full py-6 px-4 flex flex-col items-center gap-3">
        <h3 className="text-[#F59E0B] font-semibold text-lg">Search Books</h3>
        <div className="join w-full max-w-md">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="input input-bordered join-item w-full bg-[#1E293B] text-white border-gray-600 focus:outline-none"
          />
          <button className="btn join-item bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] border-none font-semibold">
            Search
          </button>
        </div>
        <div className="border-gray-700 w-full text-center py-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
