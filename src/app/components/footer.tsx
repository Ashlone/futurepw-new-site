import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#093103] text-white py-8 md:py-12 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-4 md:px-12 max-w-7xl mx-auto w-full">
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
          <Link href="/programmes" className="text-sm md:text-xs hover:underline underline-offset-4">
            Programmes
          </Link>
          <Link href="/services" className="text-sm md:text-xs hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/about" className="text-sm md:text-xs hover:underline underline-offset-4">
            About
          </Link>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full md:w-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-sm font-semibold">Dean Mazhawidza</span>
            <span className="text-xs text-gray-400">FOUNDER, PROGRAMME DIRECTOR & CAREER DEVELOPMENT STRATEGIST</span>
            <span className="text-xs text-white break-all">dean@futurepathways.org.za</span>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-sm font-semibold">Phelo Sifile</span>
            <span className="text-xs text-gray-400">CO-FOUNDER & ASSISTANT PROGRAMME DIRECTOR</span>
            <span className="text-xs text-white break-all">phelojoe@futurepathways.org.za</span>
          </div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <Link href="https://www.facebook.com/futurepathawaysconsultants" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
          <FiFacebook />
        </Link>
        <Link href="https://www.instagram.com/future_pathways_consultants_" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
          <FiInstagram />
        </Link>
        <Link href="https://www.linkedin.com/company/75671692/admin/feed/posts/" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
          <FiLinkedin />
        </Link>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-400 mt-6 px-4 md:px-12">
        <p className="text-xs text-center text-gray-400 py-4">
          © {currentYear} FUTURE PATHWAYS CONSULTANTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
