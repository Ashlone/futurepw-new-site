import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#093103] text-white py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/programs" className="text-xs hover:underline underline-offset-4">
            Programs
          </Link>
          <Link
            href="/services"
            className="text-xs hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-xs hover:underline underline-offset-4"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs text-white">Dean Mazhawidza</span>
              <span className="text-xs text-gray-400 text-center">
                FOUNDER, PROGRAMME DIRECTOR & CAREER DEVELOPMENT STRATEGIST
              </span>
              <span className="text-xs text-white">
                dean@futurepathways.org.za
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs text-white">Phelo Sifile</span>
              <span className="text-xs text-gray-400 text-center">
                CO-FOUNDER & ASSISTANT PROGRAMME DIRECTOR
              </span>
              <span className="text-xs text-gray-400">
                phelojoe@futurepathways.org.za
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link href="https://www.facebook.com/futurepathawaysconsultants" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FiFacebook />
        </Link>
        <Link href="https://www.instagram.com/future_pathways_consultants_" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FiInstagram />
        </Link>
        <Link href="https://www.linkedin.com/company/75671692/admin/feed/posts/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FiLinkedin />
        </Link>
      </div>
      <div className="border-t border-gray-400 mt-6 px-4 md:px-6">
        <p className="text-xs text-center text-gray-400">
          © {currentYear} FUTURE PATHWAYS CONSULTANTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
