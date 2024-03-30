import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {currentYear} FUTURE PATHWAYS CONSULTANTS. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="/services" className="text-xs hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="/about" className="text-xs hover:underline underline-offset-4">
          About
        </Link>
        <Link href="/contact" className="text-xs hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </footer>
  );
}
