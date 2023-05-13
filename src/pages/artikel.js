import Artikel from "@/components/Artikel";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex flex-col container gap-[30px] mt-[30px]">
        <div className="space-y-[10px]">
          <p className="font-bold text-h3">Artikel Terbaru</p>
          <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-[30px]">
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          {/* cara banyak gimana? */}
        </div>
      </div>
    </>
  );
}

export default artikel;
