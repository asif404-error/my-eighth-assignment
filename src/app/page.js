import Link from "next/link";
import Marquee from "react-fast-marquee";
import BookCard from "@/components/BookCard";
import books from "@/app/lib/data.json";
import { FaSearch, FaUserCheck, FaBookReader } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

const featuredBooks = books.slice(0, 4);

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    review:
      "BookNest completely changed how I read. I can borrow any book instantly!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    review:
      "The collection is huge and the platform is so easy to use. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Michael Lee",
    review:
      "I love how I can filter books by category. Found my favorite sci-fi books easily!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <section
        className="relative bg-[#0F172A] text-white py-24 px-4 flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.95)), url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate__animated animate__fadeInDown">
            Find Your <span className="text-[#F59E0B]">Next Read.</span>
          </h1>
          <p className="text-gray-300 text-lg animate__animated animate__fadeInUp">
            Explore thousands of books, borrow digitally, and enjoy a seamless
            library experience — all in one place.
          </p>
          <Link
            href="/all-books"
            className="btn bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-bold px-8 border-none animate__animated animate__fadeInUp"
          >
            Browse Now
          </Link>
        </div>
      </section>

      <section className="bg-[#0F766E] text-white py-3">
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          <span className="mx-6 text-sm font-medium">
            🆕 New Arrivals: The Silent Listener | Cosmos Reimagined | Learn
            Python in 30 Days | The Last Garden | Quantum Mechanics Simplified |
            Mastering React &nbsp;&nbsp;&nbsp; 🎉 Special Discount on
            Memberships! &nbsp;&nbsp;&nbsp; 📚 Borrow up to 5 books at a time!
            &nbsp;&nbsp;&nbsp;
          </span>
        </Marquee>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-2">
          Featured Books
          <span className="text-[#F59E0B]"> (Top 4)</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Hand-picked books just for you. Borrow them before they run out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            How It <span className="text-[#F59E0B]">Works</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Get started with BookNest in just 3 simple steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-[#1E293B] p-6 flex flex-col items-center gap-4 rounded-xl">
              <FaSearch size={40} className="text-[#F59E0B]" />
              <h3 className="text-xl font-semibold">1. Discover Books</h3>
              <p className="text-gray-400 text-sm text-center">
                Browse our vast collection and filter by your favorite
                categories like Story, Tech, and Science.
              </p>
            </div>
            <div className="card bg-[#1E293B] p-6 flex flex-col items-center gap-4 rounded-xl">
              <FaUserCheck size={40} className="text-[#F59E0B]" />
              <h3 className="text-xl font-semibold">2. Sign In</h3>
              <p className="text-gray-400 text-sm text-center">
                Create a free account or log in securely to access your
                personalized library dashboard.
              </p>
            </div>
            <div className="card bg-[#1E293B] p-6 flex flex-col items-center gap-4 rounded-xl">
              <FaBookReader size={40} className="text-[#F59E0B]" />
              <h3 className="text-xl font-semibold">3. Start Reading</h3>
              <p className="text-gray-400 text-sm text-center">
                Borrow any book digitally and start reading instantly from
                anywhere on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-2">
          Reader <span className="text-[#F59E0B]">Testimonials</span>
        </h2>
        <p className="text-gray-500 mb-8">
          What Our readers are saying about BookNest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card bg-white shadow-md p-6 rounded-xl flex flex-col gap-4 border border-gray-100"
            >
              <FaQuoteLeft size={24} className="text-[#F59E0B]" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.review}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <span className="font-semibold text-[#0F172A] text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}