"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav"
import {NextUIProvider} from "@nextui-org/react";
import Footer from "./components/footer"
import Partner from "./components/partner";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body className={inter.className}>
      <NextUIProvider>
      <main className="max-w-screen-lg mx-auto">
        <Nav/>
        {children}
        <hr className="border-t-2 border-[#CA0101]" /> {/* Divider */}
        <Partner/>
      </main>
      <Footer/>
      </NextUIProvider>
        </body>
    </html>
    
  );
}
