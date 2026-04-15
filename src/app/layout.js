import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Wisa Guard Security Services",
  description: "Trusted Security Experts in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="m-0 p-0 text-brand-navy antialiased">
        <Navbar />
        {children}

        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
