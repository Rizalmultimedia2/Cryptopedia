import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Header from "@/components/Header";

function test() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container">
        <div className="bg-primary-4"></div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex md:flex-col gap-[20px] py-[35px] px-[15px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Masuk</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="username" className="sr-only"></label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Username"
              />
              <label for="password" className="sr-only"></label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="password"
              />
              <button type="submit" className="button-input-1">
                Masuk
              </button>
            </form>
            <p className="text-p4 font-medium">
              Belum punya akun?
              <a href="#" className="text-primary-1 font-bold">
                &nbsp; Daftar
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default test;
