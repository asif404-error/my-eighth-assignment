"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
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

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-[#0F172A] text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">
          My <span className="text-[#F59E0B]">Profile</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Manage your BookNest account information.
        </p>
      </section>
      <section className="max-w-xl mx-auto px-4 py-16">
        <div className="card bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center gap-6">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-[#F59E0B] ring-offset-2 ring-offset-white">
              <Image
                src={
                  user.image ||
                  `https://ui-avatars.com/api/?name=${user.name}&background=F59E0B&color=0F172A&size=128`
                }
                alt={user.name}
                width={112}
                height={112}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-xl px-4 py-3">
              <FaUser className="text-[#F59E0B]" size={18} />
              <div>
                <p className="text-xs text-gray-400 font-medium">Full Name</p>
                <p className="text-[#0F172A] font-semibold">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-xl px-4 py-3">
              <FaEnvelope className="text-[#F59E0B]" size={18} />
              <div>
                <p className="text-xs text-gray-400 font-medium">
                  Email Address
                </p>
                <p className="text-[#0F172A] font-semibold">{user.email}</p>
              </div>
            </div>
          </div>
          <Link
            href="/profile/update"
            className="btn bg-[#0F766E] hover:bg-[#0d6460] text-white border-none w-full gap-2"
          >
            <FaEdit size={16} />
            Update Information
          </Link>
        </div>
      </section>
    </main>
  );
}
