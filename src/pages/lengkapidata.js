import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SelectAvatar from "@/components/Select/SelectAvatar";
import Router, { useRouter } from "next/router";
import InputForm from "@/components/InputForm";

function lengkapidata() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container container-x">
        <div className="bg-primary-4 lg:visible invisible"></div>
        <div className="flex-center min-h-screen">
          <div className="form">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Lengkapi data</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="email" className="sr-only"></label>
              <input
                readOnly
                type="text"
                id="email"
                className="form-input bg-primary-4 placeholder-black pointer-events-none"
                placeholder="example@gmail.com"
              />
              <InputForm id="username" type="text" placeholder="Username" />
              <label for="trader" className="sr-only"></label>
              <select name="" id="trader" className="form-input">
                <option value="" disabled selected hidden>
                  Trader
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="w-full flex flex-col gap-4">
                <span>Pilih avatar</span>
                <ul className="flex flex-row w-full justify-between">
                  <SelectAvatar value="avatar1" />
                  <SelectAvatar value="avatar2" />
                  <SelectAvatar value="avatar3" />
                  <SelectAvatar value="avatar4" />
                  <SelectAvatar value="avatar5" />
                  <SelectAvatar value="avatar6" />
                </ul>
              </div>
              <button
                type="button"
                // nanti ubah ke type submit jika sudah ke be
                className="button-input-1"
                onClick={() => router.push("/beranda")}
              >
                Lengkapi data
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default lengkapidata;
