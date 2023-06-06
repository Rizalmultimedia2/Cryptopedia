import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({ admin }) {
  return (
    <>
      <footer className="bg-primary-1 mt-[50px] text-white">
        <div className="mx-auto w-full container p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex flex-col items-start gap-2">
                <Image
                  src="https://i.ibb.co/9hsyMYy/Logo-white.png"
                  className="fill-white"
                  width={86}
                  height={78}
                  alt="Cryptopedia"
                />
                <span className=" text-2xl font-semibold dark:text-white">
                  Cryptopedia
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="font-medium">
                  {admin ? (
                    <>
                      <li className="mb-4">
                        <Link
                          href="/admin/daftarlaporan"
                          className="hover:underline"
                        >
                          Daftar Laporan
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/admin/artikel" className="hover:underline">
                          Atikel
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="/admin/crypto101"
                          className="hover:underline"
                        >
                          Crypto 101
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="mb-4">
                        <Link href="#" className="hover:underline">
                          Home
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/artikel" className="hover:underline">
                          Atikel
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/crypto101" className="hover:underline">
                          Crypto 101
                        </Link>
                      </li>
                      <li>
                        <Link href="/cryptosharing" className="hover:underline">
                          Crypto Sharing
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                Cryptopedia™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
