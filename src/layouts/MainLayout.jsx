import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#fcfdfe] text-slate-900 font-sans">
      {/* Subtle ambient pastel gradients in background matching reference */}
      <div className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-teal-200/20 via-cyan-100/20 to-transparent filter blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 -left-48 -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-200/15 via-orange-100/15 to-transparent filter blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 right-10 -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-purple-200/20 via-indigo-100/15 to-transparent filter blur-3xl pointer-events-none"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow pt-24 sm:pt-28 pb-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
