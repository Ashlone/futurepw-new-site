"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav"
import {NextUIProvider} from "@nextui-org/react";
import Footer from "./components/footer"
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
      <Nav/>
        {children}
        <Footer/>
      </NextUIProvider>
        </body>
        
    </html>
    
  );
}
