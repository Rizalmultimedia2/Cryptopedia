import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import InputForm from "@/components/InputForm";

function daftar() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x ">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Daftar</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <InputForm id="fullname" type="text" placeholder="Nama lengkap" />
              <InputForm id="email" type="email" placeholder="Email" />
              <InputForm
                id="password"
                type="password"
                placeholder="Kata sandi"
              />
              <InputForm
                id="kpassword"
                type="password"
                placeholder="Konfirmasi kata sandi"
              />
              <button
                type="button"
                // nanti ubah type button ke submit
                className="button-input-1"
                onClick={() => router.push("/lengkapidata")}
              >
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
