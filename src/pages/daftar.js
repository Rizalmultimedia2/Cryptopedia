import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Header from "@/components/Header";

function daftar() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 container">
        <div className="bg-primary-4"></div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col h-[537px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Daftar</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="fullname" className="sr-only"></label>
              <input
                type="text"
                id="fullname"
                className="form-input"
                placeholder="Nama lengkap"
              />
              <label for="email" className="sr-only"></label>
              <input
                type="text"
                id="email"
                className="form-input"
                placeholder="Email"
              />
              <label for="password" className="sr-only"></label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Kata sandi"
              />
              <label for="kpassword" className="sr-only"></label>
              <input
                type="password"
                id="kpassword"
                className="form-input"
                placeholder="Konfirmasi kata sandi"
              />
              <button type="submit" className="button-input-1">
                Daftar
              </button>
            </form>
            <p className="text-p4 font-medium">
              Sudah punya akun?
              <a href="#" className="text-primary-1 font-bold">
                {" "}
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default daftar;
