"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { FaBookOpen } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signIn.email({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Invalid credentials. Please try again.");
    } else {
      toast.success("Login successful!");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="card bg-white shadow-xl w-full max-w-md rounded-2xl p-8">
        <div className="flex flex-col items-center gap-2 mb-6">
          <FaBookOpen size={40} className="text-[#F59E0B]" />
          <h1 className="text-2xl font-bold text-[#0F172A]">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Login to your BookNest account</p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#0F172A]">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:outline-none focus:border-[#0F766E]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[#0F172A]">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-none focus:border-[#0F766E]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-bold border-none mt-2"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
          </button>
        </form>
        <div className="divider text-gray-400 text-sm">or</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center gap-2 border-gray-300 hover:bg-gray-50 hover:border-gray-300 text-[#0F172A]"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#0F766E] font-semibold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}