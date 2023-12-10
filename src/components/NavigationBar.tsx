"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image, Button } from "@nextui-org/react";
import NextImage from "next/image"

export default function NavigationBar(currentPage: { currentPage: "inventory" | "form" | "instructions" }) {
  return (
    <Navbar>
      <NavbarBrand>
        <Image as={NextImage} src={'/logo.jpg'} alt='Sabaq Logo' width={100} height={100} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem {...currentPage.currentPage === "inventory" ? { isActive: true } : {}}>
          <Link {...currentPage.currentPage === "inventory" ? {} : { color: "foreground" }} href="inventory">
            Inventario
          </Link>
        </NavbarItem>
        <NavbarItem {...currentPage.currentPage === "form" ? { isActive: true } : {}}>
          <Link {...currentPage.currentPage === "form" ? {} : { color: "foreground" }} href="form">
            Formulario
          </Link>
        </NavbarItem>
        <NavbarItem {...currentPage.currentPage === "instructions" ? { isActive: true } : {}}>
          <Link {...currentPage.currentPage === "instructions" ? {} : { color: "foreground" }} href="instructions">
            Instructivo
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly className="bg-transparent p-0 h-8">
            <Image as={NextImage} src={'/settings.svg'} alt='Settings Icon' width={30} height={30} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
