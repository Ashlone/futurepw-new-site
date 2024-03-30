"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import ContactModal from "./modal"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Services",
    "About",
    "Contact"
  ];

  const [modalOpen, setModalOpen] = useState<boolean>(false);



  const handleModalOpen = () => {
    setModalOpen(true);
  };



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} style={{ backgroundColor: "white" }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          style={{ color: "black" }}
        />
        <NavbarBrand>
          <Link href="/">
            <img
              alt="Logo"
              className="mx-auto rounded-xl object-cover object-center sm:w-full lg:w-auto"
              src="./logo.png"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-black" href="/" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="/about" >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-black" href="/services" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <button onClick={handleModalOpen} className="text-black bg-gray inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                  Contact Us
       </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu style={{ backgroundColor: "white" }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full  text-black"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Navbar>
  );
}

