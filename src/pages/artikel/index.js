import Artikel from "@/components/Artikel";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import { DataArtikel } from "@/Utils/Artikel";
import Footer from "@/components/Footer";
import SelectCategory from "@/components/SelectCategory";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <p className="font-bold text-h3">Artikel Terbaru</p>
          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar />
            </div>
            <div className="flex flex-row items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row text-p2 rounded-lg gap-5">
                <SelectCategory value="semua" label="Semua" style="level" />
                <SelectCategory value="pemula" label="Pemula" style="level" />
                <SelectCategory
                  value="menengah"
                  label="Menengah"
                  style="level"
                />
                <SelectCategory value="ahli" label="Ahli" style="level" />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px]">
          {DataArtikel.map((item) => (
            <Artikel
              body={item.body}
              title={item.title}
              level={item.level}
              date={item.date}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default artikel;
