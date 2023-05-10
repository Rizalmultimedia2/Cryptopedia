import React from "react";
import { Menu } from "@headlessui/react";

function test() {
  return (
    <div className="grid grid-cols-2 container">
      <div></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col h-[537px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
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
  );
}

export default test;
