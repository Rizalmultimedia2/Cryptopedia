import Image from "next/image";
import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import ArtikelModal from "../Modal/ArtikelModal";

function Artikel({ title, date, body, level, id }) {
  const getColor = (level) => {
    if (level == "Pemula") {
      return "#29BF9F";
    } else if (level == "Menengah") {
      return "#FACA21";
    } else if (level == "Ahli") {
      return "#E96E70";
    }
  };

  const isAdmin = (id) => {
    if (id == 1) {
      return "visible";
    } else {
      return "none";
    }
  };

  return (
    <>
      <div className="ring-hover z-0">
        <div className="flex flex-col w-full bg-white border border-gray-4 rounded-lg gap-[10px] overflow-hidden">
          <a className="relative h-[230px]" href="/artikel/detail">
            <Image src="/image/artikel.png" fill className="object-cover" />
          </a>
          <a
            className="flex flex-col gap-[5px] px-[7px] mb-[10px] "
            href="/artikel/detail"
          >
            <div className="level" style={{ background: getColor(level) }}>
              <span>{level}</span>
            </div>
            <div className="text-p1 text-black font-bold">{title}</div>
            <p className="text-p3 text-black font-medium">{date}</p>
            <p className="line-clamp-2">{body}</p>
          </a>
          <div
            className="flex-center gap-3 mb-3"
            style={{ display: isAdmin(id) }}
          >
            <DeleteModal title="Hapus Artikel" />
            <ArtikelModal name="Edit artikel" title="Edit Artikel" icon={0} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Artikel;
