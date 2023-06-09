import { useUser } from "@/context/user";
import Image from "next/image";
import React, { useState } from "react";
import Float from "./Float";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const user = useUser();
  const { uid } = user;
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
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

            <button
              className="text-primary-1 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <FiX /> : <FiMenu className="" />}
            </button>
          </div>
          <div
            className={
              "justify-between items-end lg:pl-[250px] w-full lg:flex lg:w-auto " +
              (navOpen
                ? "absolute top-16 bg-white left-0 px-8 pb-5 shadow-shadows-1"
                : " hidden")
            }
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
