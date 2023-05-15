import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import { FiChevronLeft } from "react-icons/fi";

function ubahkatasandi() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <a className="place-self-start px-3" href="/profile">
              <FiChevronLeft className="inline" />
              Kembali
            </a>
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Ubah Kata Sandi</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <InputForm
                id="password"
                type="password"
                placeholder="Masukkan kata sandi lama"
              />
              <InputForm
                id="kpassword"
                type="password"
                placeholder="Masukkan kata sandi baru"
              />
              <InputForm
                id="knpassword"
                type="password"
                placeholder="Masukkan konfirmasi kata sandi baru"
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
