"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-8 border-b flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-extrabold">
        <Link href="/" className="text-sky-950 hover:text-red-500 duration-500">
         ShioriS Portfolio
        </Link>
        </h1>
      </div>
        <nav className="text-sm font-bold">
          <ul className="flex items-center">
            <li>
              <Link href="/" className="py-3 mx-3 rounded-md hover:text-red-500 duration-500">
              Profile
              </Link>
            </li>
            <li>
              <Link href="/" className="py-3 mx-3 rounded-md hover:text-red-500 duration-500">
              Github
              </Link>
            </li>
            <li>
              <Link href="/" className="py-3 mx-3 rounded-md hover:text-red-500 duration-500">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;