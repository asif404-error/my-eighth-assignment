import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-white text-center px-4">
      <FaBookOpen size={80} className="text-[#F59E0B] mb-6" />
      <h1 className="text-8xl font-bold text-[#F59E0B] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold border-none px-6"
      >
        Back to Home
      </Link>
    </div>
  );
}