import Image from "next/image";
import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import ArtikelModal from "../Modal/ArtikelModal";
import parse from "html-react-parser";

function Artikel({ title, date, body, level, id }) {
  const getBody = parse(body);
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Pemula";
      case 2:
        return "Menengah";
      case 3:
        return "Ahli";
    }
  };

  const getColor = (level) => {
    if (level == 1) {
      return "#29BF9F";
    } else if (level == 2) {
      return "#FACA21";
    } else if (level == 3) {
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
          <a className="relative h-[230px]" href={`/artikel/${id}`}>
            <Image
              src="/image/artikel.png"
              fill
              className="object-cover"
              alt="image"
            />
          </a>
          <a
            className="flex flex-col gap-[5px] px-[7px] mb-[10px] "
            href={`/artikel/${id}`}
          >
            <div className="level" style={{ background: getColor(level) }}>
              {getLevel(level)}
            </div>
            <div className="text-p1 text-black font-bold">{title}</div>
            <p className="text-p3 text-black font-medium">{date}</p>
            <div className="line-clamp-2">{getBody}</div>
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
