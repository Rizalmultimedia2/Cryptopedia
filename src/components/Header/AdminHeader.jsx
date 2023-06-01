import { useUser } from "@/context/user";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SignOut } from "../../../firebaseConfig";
import { useRouter } from "next/router";

function AdminHeader() {
  const user = useUser();
  const router = useRouter();
  const { uid } = user;
  const handleClick = async () => {
    SignOut();
    await router.push("/admin/masuk");
  };

  return (
    <header className="sticky top-0 z-40">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-shadows-1">
        <div className="flex-center-between flex-wrap mx-auto container">
          <Link href="/" className="flex items-center">
            <Image
              src="/image/Logo.svg"
              height={50}
              width={55}
              alt="Cryptopedia"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <div>
              <button
                href="/admin/masuk"
                className="text-primary-1 focus:ring-2 focus:ring-primary-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border border-primary-1 focus:outline-none"
                onClick={handleClick}
              >
                Keluar
              </button>
            </div>
          </div>
          <div
            className="hidden justify-between items-end pl-[250px] w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
              <li>
                <Link
                  href="/admin/daftarlaporan"
                  className="item-headbar"
                  aria-current="page"
                >
                  Daftar Laporan
                </Link>
              </li>
              <li>
                <Link href="/admin/artikel" className="item-headbar">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/admin/crypto101" className="item-headbar">
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

export default AdminHeader;
