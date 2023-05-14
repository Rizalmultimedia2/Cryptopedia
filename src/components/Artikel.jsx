import Image from "next/image";
import React from "react";

function Artikel({ title, date, body, level }) {
  const getColor = (level) => {
    if (level == "Pemula") {
      return "#29BF9F";
    } else if (level == "Menengah") {
      return "#FACA21";
    } else if (level == "Ahli") {
      return "#E96E70";
    }
  };

  return (
    <>
      <div className="flex flex-col w-full bg-white border border-gray-4 rounded-lg gap-[10px] overflow-hidden">
        <div className="relative h-[230px]">
          <Image src="/image/artikel.png" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-[5px] px-[7px] mb-[10px]">
          <div className="level" style={{ background: getColor(level) }}>
            <span>{level}</span>
          </div>
          <p className="text-p1 text-black font-bold">{title}</p>
          <p className="text-p3 text-black font-medium">{date}</p>
          <p className="line-clamp-2">{body}</p>
        </div>
      </div>
    </>
  );
}

export default Artikel;
