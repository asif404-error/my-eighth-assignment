import Image from "next/image";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
      <figure className="h-48 bg-gray-100 overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          width={300}
          height={192}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4 flex flex-col gap-2">
        <span className="badge bg-[#0F766E] text-white border-none text-xs">
          {book.category}
        </span>
        <h3 className="card-title text-[#0F172A] text-base font-bold leading-tight">
          {book.title}
        </h3>
        <p className="text-gray-500 text-xs">{book.author}</p>
        <div className="card-actions mt-2">
          <Link
            href={`/book/${book.id}`}
            className="btn btn-sm bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold border-none w-full"
          >
            <FaBookOpen size={14} />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
