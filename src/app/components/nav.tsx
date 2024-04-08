"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import ContactModal from "./modal";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "About", "Contact","Programs"];

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: "white" }}
    >
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
              className="mt-10 object-contain object-center sm:w-full lg:w-auto"
              src="./logo.png"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-black" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-black" href="/services" >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="/programs">
            Programs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <button
            onClick={handleModalOpen}
            className="text-black bg-[#E8C316] inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Contact Us
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu style={{ backgroundColor: "white" }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full  text-black" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Navbar>
  );
}
