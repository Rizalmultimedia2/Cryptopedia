import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import InputForm from "@/components/InputForm";

function masuk() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Masuk</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <InputForm id="username" type="text" placeholder="Username" />
              <InputForm
                id="password"
                type="password"
                placeholder="Kata sandi"
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

export default masuk;
