"use client";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import books from "@/app/lib/data.json";
import { authClient } from "@/app/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBookOpen, FaUser, FaLayerGroup, FaCubes } from "react-icons/fa";
import Image from "next/image";

export default function BookDetailsPage({ params }) {
  const { id } = use(params);
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

  if (!user) {
    return null;
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Book not found.</p>
      </div>
    );
  }

  const handleBorrow = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    toast.success(`Successfully borrowed "${book.title}"!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <ToastContainer />
      <section className="bg-[#0F172A] text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Book <span className="text-[#F59E0B]">Details</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Everything you need to know about this book.
        </p>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="card bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-72 shrink-0 bg-gray-100 flex items-center justify-center p-6">
              <Image
                src={book.image_url}
                alt={book.title}
                width={220}
                height={320}
                className="w-full max-w-[220px] rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-8 flex-1">
              <div>
                <span className="badge bg-[#0F766E] text-white border-none mb-3">
                  {book.category}
                </span>
                <h2 className="text-3xl font-bold text-[#0F172A] leading-tight">
                  {book.title}
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUser className="text-[#F59E0B]" />
                  <span className="text-sm font-medium">Author:</span>
                  <span className="text-sm">{book.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaLayerGroup className="text-[#F59E0B]" />
                  <span className="text-sm font-medium">Category:</span>
                  <span className="text-sm">{book.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCubes className="text-[#F59E0B]" />
                  <span className="text-sm font-medium">Available:</span>
                  <span className="text-sm">
                    {book.available_quantity} copies left
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-[#0F172A] font-semibold mb-2">
                  Description
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>

              <button
                onClick={handleBorrow}
                className="btn bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-bold border-none w-fit px-8 mt-2"
              >
                <FaBookOpen />
                Borrow This Book
              </button>

              {!user && (
                <p className="text-sm text-gray-400">
                  You must{" "}
                  <span
                    onClick={() => router.push("/login")}
                    className="text-[#0F766E] font-semibold cursor-pointer hover:underline"
                  >
                    login
                  </span>{" "}
                  to borrow this book.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
