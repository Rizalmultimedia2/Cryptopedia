import Artikel from "@/components/Artikel";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import { DataArtikel } from "@/Utils/Artikel";
import Footer from "@/components/Footer";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex flex-col container px-[50px] md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <p className="font-bold text-h3">Artikel Terbaru</p>
          <div className="flex md:justify-between flex-wrap items-center gap-[20px]">
            <div>
              <Searchbar />
            </div>
            <div className="flex flex-row items-center gap-[20px]">
              <p>level</p>
              <button className="level-filter border-primary-1">Semua</button>
              <button className="level-filter">Pemula</button>
              <button className="level-filter">Menengah</button>
              <button className="level-filter">Ahli</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[60px] md:gap-x-[20px] gap-y-[30px]">
          {DataArtikel.map((item) => (
            <Artikel
              body={item.body}
              title={item.title}
              level={item.level}
              date={item.date}
            />
          ))}
          {/* cara banyak gimana? */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default artikel;
