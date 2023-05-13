import Image from "next/image";
import React from "react";

function Artikel() {
  return (
    <>
      <div className="flex flex-col w-full bg-white border border-gray-4 rounded-lg gap-[10px] overflow-hidden">
        <Image src="/image/artikel.png" width={378} height={230} />
        <div className="flex flex-col gap-[5px] px-[7px] mb-[10px]">
          <div className="level">Pemula</div>
          <p className="text-p1 text-black font-bold">
            Bitcoin Akan Bullish di tahun 2024
          </p>
          <p className="text-p3 text-black font-medium">20 April 2023</p>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ex,
            inventore mollitia non harum similique, fugit veniam veritatis error
            excepturi voluptatum a labore, dolorum ut ipsam atque quas quae
            possimus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Artikel;
