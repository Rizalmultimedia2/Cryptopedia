import { useUser } from "@/context/user";
import Image from "next/image";
import React from "react";
import Float from "./Float";
import Link from "next/link";

function Header() {
  const user = useUser();
  const { uid } = user;
  return (
    <header className="sticky top-0 z-40">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-shadows-1">
        <div className="flex-center-between flex-wrap mx-auto container">
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.ibb.co/vd5RvpN/Logo.png"
              height={50}
              width={55}
              alt="Cryptopedia"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {!uid ? (
              <div>
                <Link
                  href="/daftar"
                  className="text-primary-1 focus:ring-2 focus:ring-primary-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border border-primary-1 focus:outline-none"
                >
                  Daftar
                </Link>
                <Link
                  href="/masuk"
                  className="text-white bg-primary-1 hover:bg-primary-800 focus:ring-2 focus:ring-primary-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Masuk
                </Link>
              </div>
            ) : (
              <Float />
            )}

            {/* Mobile menu */}
            {/* <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>
          <div
            className="hidden justify-between items-end pl-[250px] w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
              <li>
                <Link href="/" className="item-headbar">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/beranda"
                  className="item-headbar"
                  aria-current="page"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="item-headbar">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/cryptosharing" className="item-headbar">
                  Crypto Sharing
                </Link>
              </li>
              <li>
                <Link href="/crypto101" className="item-headbar">
                  Crypto 101
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
