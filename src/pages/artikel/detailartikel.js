import Artikel from "@/components/Artikel";
import { FiChevronLeft, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import { DataArtikel } from "@/Utils/Artikel";
import Image from "next/image";
import Footer from "@/components/Footer";

function detailartikel() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 container gap-[50px] container-x mt-[30px]">
        <div className="col-span-2 flex flex-col gap-[20px]">
          <a href="/artikel">
            <FiChevronLeft className="inline" />
            <span>Kembali</span>
          </a>
          <div>
            <span className="text-p3 font-bold">pemula</span>
            <p className="text-h2">Judul</p>
            <span className="text-p2">
              Tanggal
              <span className="text-primary-1"> Rizal Herliansyah Hidayat</span>
            </span>
          </div>
          <div className="relative h-[380px]">
            <Image
              src="/image/Artikel.png"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              beatae! Aut veniam dolores consequuntur excepturi, suscipit atque
              perferendis sit consectetur non, numquam deserunt consequatur
              possimus eveniet cum expedita quaerat aliquid accusamus cumque
              provident facilis dolor! Eos laborum sit non odio inventore
              dolorum illum excepturi molestias impedit deserunt nemo hic in
              quam soluta explicabo, facere ea repellendus commodi nobis
              exercitationem! Fugiat voluptatem omnis sunt accusantium
              recusandae. Tenetur dignissimos quos fugit blanditiis adipisci
              iure! Sapiente adipisci incidunt iusto recusandae quam. Porro
              quaerat aliquid, expedita dolores nulla architecto corrupti dolore
              ex rerum cupiditate itaque, commodi totam enim molestias
              repellendus ea minus, maiores eaque.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              beatae! Aut veniam dolores consequuntur excepturi, suscipit atque
              perferendis sit consectetur non, numquam deserunt consequatur
              possimus eveniet cum expedita quaerat aliquid accusamus cumque
              provident facilis dolor! Eos laborum sit non odio inventore
              dolorum illum excepturi molestias impedit deserunt nemo hic in
              quam soluta explicabo, facere ea repellendus commodi nobis
              exercitationem! Fugiat voluptatem omnis sunt accusantium
              recusandae. Tenetur dignissimos quos fugit blanditiis adipisci
              iure! Sapiente adipisci incidunt iusto recusandae quam. Porro
              quaerat aliquid, expedita dolores nulla architecto corrupti dolore
              ex rerum cupiditate itaque, commodi totam enim molestias
              repellendus ea minus, maiores eaque.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              beatae! Aut veniam dolores consequuntur excepturi, suscipit atque
              perferendis sit consectetur non, numquam deserunt consequatur
              possimus eveniet cum expedita quaerat aliquid accusamus cumque
              provident facilis dolor! Eos laborum sit non odio inventore
              dolorum illum excepturi molestias impedit deserunt nemo hic in
              quam soluta explicabo, facere ea repellendus commodi nobis
              exercitationem! Fugiat voluptatem omnis sunt accusantium
              recusandae. Tenetur dignissimos quos fugit blanditiis adipisci
              iure! Sapiente adipisci incidunt iusto recusandae quam. Porro
              quaerat aliquid, expedita dolores nulla architecto corrupti dolore
              ex rerum cupiditate itaque, commodi totam enim molestias
              repellendus ea minus, maiores eaque.
            </p>
          </div>
          <div className="py-5 px-5 bg-[#CDEDE6]/25 w-fit text-p1 flex flex-row items-center gap-3">
            <span className="font-semibold">
              Apakah kamu sudah dengan artikel ini?{" "}
            </span>
            <FiThumbsDown className="text-red-1" />
            <FiThumbsUp className="text-primary-1" />
          </div>
        </div>
        <div className="col-span-1 flex lg:flex-col flex-wrap gap-5">
          <span className="text-h4">Artikel Lainnya</span>
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

export default detailartikel;
