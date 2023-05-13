import Image from "next/image";
import React from "react";

function Komentar() {
  return (
    <>
      <div className="flex flex-col w-[714px] border rounded-[10px] border-gray-4 p-[10px] gap-[10px]">
        <div className="felx flex row w-full gap-[10px]">
          <Image
            src="/image/Artikel.png"
            height={40}
            width={40}
            className="rounded-[100px]"
          />
          <div className="w-full">
            <span className="text-h6">Yuli</span>
            <div className="flex justify-between text-p4">
              <span className="">username</span>
              <span>1 menit yang lalu</span>
            </div>
          </div>
        </div>
        <div className="px-[10px] py-[5px] bg-[#CDEDE6]/25 rounded-lg">
          Komentar
        </div>
      </div>
    </>
  );
}

export default Komentar;
