"use client";
import { useState } from "react";
import books from "@/app/lib/data.json";
import BookCard from "@/components/BookCard";
import CategorySidebar from "@/components/CategorySidebar";
import { FaSearch } from "react-icons/fa";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-[#0F172A] text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">
          All <span className="text-[#F59E0B]">Books</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Browse our full collection and find your next read.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-xl mx-auto bg-white focus-within:border-[#0F766E]">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by title..."
            className="grow focus:outline-none bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 flex flex-col md:flex-row gap-6">
        <CategorySidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex-1">
          {filteredBooks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <p className="text-gray-500 text-lg font-medium">
                No books found.
              </p>
              <button
                className="btn btn-sm bg-[#F59E0B] border-none text-[#0F172A]"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
