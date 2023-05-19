import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-40">
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-shadows-1">
        <div class="flex flex-wrap justify-between items-center mx-auto container">
          <a href="/" class="flex items-center">
            <Image
              src="/image/Logo.svg"
              height={50}
              width={55}
              alt="Cryptopedia"
            />
          </a>
          <div class="flex items-center lg:order-2">
            <a
              href="/daftar"
              class="text-primary-1 focus:ring-2 focus:ring-primary-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border border-primary-1 focus:outline-none"
            >
              Daftar
            </a>
            <a
              href="/masuk"
              class="text-white bg-primary-1 hover:bg-primary-800 focus:ring-2 focus:ring-primary-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none"
            >
              Masuk
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
                class="hidden w-6 h-6"
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
            </button>
          </div>
          <div
            class="hidden justify-between items-end pl-[250px] w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/beranda"
                  class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-primary-1"
                  aria-current="page"
                >
                  Home
                  {/* nanti jadi beranda kalau sudah login */}
                </a>
              </li>
              <li>
                <a
                  href="/artikel"
                  class="item-header lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Artikel
                </a>
              </li>
              <li>
                <a
                  href="/cryptosharing"
                  class="item-header lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Crypto Sharing
                </a>
              </li>
              <li>
                <a
                  href="/crypto101"
                  class="item-header lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Crypto 101
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="item-header lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Tentang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
