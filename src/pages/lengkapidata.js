import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Header from "@/components/Header";

function lengkapidata() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 container">
        <div className="bg-primary-4"></div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex md:flex-col gap-[20px] py-[35px] px-[15px] w-[486px] bg-light-color rounded-md shadow-shadows-1 items-center justify-center space-y-5">
            <Image src="/image/Logo.svg" height={120} width={133} />
            <h1 className="text-primary-1 text-h5">Lengkapi data</h1>
            <form action="" className="flex flex-col gap-[20px]">
              <label for="email" className="sr-only"></label>
              <input
                readOnly
                type="text"
                id="email"
                className="form-input bg-gray-4 placeholder-black"
                placeholder="example@gmail.com"
              />
              <label for="username" className="sr-only"></label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Username"
              />
              <label for="trader" className="sr-only"></label>
              <select name="" id="trader" className="form-input">
                <option value="" disabled selected hidden>
                  Trader
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label>
                Pilih avatar
                <select>
                  <option value="fruit">Fruit</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="meat">Meat</option>
                </select>
              </label>
              <button type="submit" className="button-input-1">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default lengkapidata;
