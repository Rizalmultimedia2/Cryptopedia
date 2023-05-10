import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Header from "@/components/Header";

function test() {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2 grid-cols-1 container">
        <div></div>
        <div className="test">
          <div className="flex md:flex-col gap-[25px] py-[35px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
            <Image src="/image/logo.png" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Masuk</h1>
            <div className="flex items-center h-[45px] font-medium w-[420px] border border-gray-400 rounded-lg text-p3 px-3">
              Username
            </div>
            <div className="flex items-center h-[45px] font-medium w-[420px] border border-gray-400 rounded-lg text-p3 px-3">
              Password
            </div>
            <div className="flex items-center justify-center h-[45px] w-[420px] text-light-color bg-primary-1 rounded-lg text-h6">
              Masuk
            </div>
            <p className="text-p4 font-medium">
              Belum punya akun?
              <span className="text-primary-1 font-bold"> Daftar</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default test;
