import { FiPlus } from "react-icons/fi";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import SelectCategory from "@/components/SelectCategory";
import Banner from "@/components/Banner";
import { DataMateri } from "@/Utils/Crypto101";

function index() {
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-h3">Crypto 101</h3>
          <div className="flex justify-between">
            <span className="text-p1">
              Tempat belajar cryptocurrency untuk pemula
            </span>
            <button className="button-normal flex gap-3">
              <FiPlus /> Buat Diskusi
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectCategory value="semua" label="Semua" style="category" />
              <SelectCategory value="pemula" label="Pemula" style="category" />
              <SelectCategory
                value="menengah"
                label="Menengah"
                style="category"
              />
              <SelectCategory value="ahli" label="Ahli" style="category" />
            </ul>
            <div>
              <Searchbar />
            </div>
            <div className="flex flex-col gap-5">
              {DataMateri.map((item) => (
                <CryptoMateri
                  title={item.title}
                  level={item.level}
                  body={item.body}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
            <div>
              <Banner
                title="Sudah siap belajar crypto lebih lanjut?"
                body="Bergabung dalam diskusi untuk tingkatkan pemahamanmu didalam cryptocurrency"
                link="/cryptosharing"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
