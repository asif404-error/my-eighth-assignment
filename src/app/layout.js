import { Montserrat } from "next/font/google";
import "./globals.css";
import "animate.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookNest",
  description:
    "A seamless and modern web application designed to digitize the traditional library experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}