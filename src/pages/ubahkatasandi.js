import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Header from "@/components/Header";

function ubahkatasandi() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 container">
        <div className="bg-primary-4"></div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col h-[537px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
            <div className="place-self-start px-3">Kembali</div>
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Ubah Kata Sandi</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="password" className="sr-only"></label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Kata sandi lama"
              />
              <label for="kpassword" className="sr-only"></label>
              <input
                type="password"
                id="kpassword"
                className="form-input"
                placeholder="Kata sandi baru"
              />
              <label for="knpassword" className="sr-only"></label>
              <input
                type="password"
                id="knpassword"
                className="form-input"
                placeholder="Konfirmasi kata sandi baru"
              />
              <button type="submit" className="button-input-1">
                Ubah kata sandi
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ubahkatasandi;
