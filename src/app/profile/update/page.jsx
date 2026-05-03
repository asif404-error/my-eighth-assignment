"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { FaBookOpen } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [isPending, user, router]);

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#F59E0B]"></span>
      </div>
    );
  }

  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Update failed. Please try again.");
    } else {
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="bg-[#0F172A] text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Update <span className="text-[#F59E0B]">Profile</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Update your BookNest account information.
        </p>
      </section>
      <section className="max-w-xl mx-auto px-4 py-16">
        <div className="card bg-white shadow-xl rounded-2xl p-8">
          <div className="flex flex-col items-center gap-2 mb-6">
            <FaBookOpen size={40} className="text-[#F59E0B]" />
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Edit Information
            </h2>
            <p className="text-gray-500 text-sm">
              Update your name and profile image
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-[#F59E0B] ring-offset-2 ring-offset-white">
                <Image
                  src={
                    image ||
                    `https://ui-avatars.com/api/?name=${name}&background=F59E0B&color=0F172A&size=128`
                  }
                  alt="Preview"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#0F172A]">
                  New Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your new name"
                className="input input-bordered w-full focus:outline-none focus:border-[#0F766E]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#0F172A]">
                  New Image URL
                </span>
              </label>
              <input
                type="url"
                placeholder="Enter your new image URL"
                className="input input-bordered w-full focus:outline-none focus:border-[#0F766E]"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-bold border-none mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Update Information"
              )}
            </button>
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="btn btn-outline border-gray-300 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500"
            >
              Cancel
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
