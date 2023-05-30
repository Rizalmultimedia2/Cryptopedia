import Artikel from "@/components/Artikel/Artikel";
import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import { DataArtikel } from "@/Utils/Artikel";
import Footer from "@/components/Footer";
import SelectLevel from "@/components/Select/SelectLevel";
import ArtikelModal from "@/components/Modal/ArtikelModal";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <ArtikelModal
            name="Tambah artikel"
            title="Tambah Artikel Baru"
            icon={1}
          />
          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar placeholder="Cari artikel" />
            </div>
            <div className="flex flex-row items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-visible">
                <SelectLevel style="level" />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px]">
          {DataArtikel.map((item, index) => (
            <Artikel
              key={index}
              body={item.body}
              title={item.title}
              level={item.level}
              date={item.date}
              id={1}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default artikel;
