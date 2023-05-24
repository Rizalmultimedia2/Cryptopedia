import { DataArtikel } from "@/Utils/Artikel";
import Artikel from "@/components/Artikel/Artikel";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { GoKebabHorizontal } from "react-icons/go";
import React from "react";
import { DataForum } from "@/Utils/CryptoSharing";

function beranda() {
  return (
    <>
      <Header />
      <div className="container container-x flex flex-col gap-5 my-6">
        <div className="flex flex-col gap-6">
          <div className="text-p2">
            <p className="text-h3 text-black max-w-[600px]">
              Belajar dan berdiskusi Cryptocurrency dengan mudah
            </p>
            Pemula di Crypto?{" "}
            <a href="/crypto101" className="text-primary-1 font-semibold ">
              Klik disini
            </a>
          </div>
          <div className="flex flex-row gap-4 w-full h-[50px]">
            <Image
              src="/image/artikel.png"
              height={50}
              width={50}
              className="rounded-full object-cover"
              alt="avatars"
            />
            <a
              href="/cryptosharing"
              className="button-normal flex-center-between gap-3 w-[300px]"
            >
              <span>Klik untuk membuat diskusi</span>
              <GoKebabHorizontal />
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[60px] gap-[30px]">
          <div className="col-span-2 flex flex-col gap-5">
            <span className="text-h5">Forum Terbaru</span>
            <div className="flex flex-col gap-5">
              {DataForum.map((item) => (
                <CryptoSharing
                  title={item.title}
                  username={item.username}
                  waktu={item.waktu}
                  tanggal={item.tanggal}
                  body={item.body}
                  kategori={item.kategori}
                  tag={item.tag}
                  like={item.jumlah_like}
                  dislike={item.jumlah_dislike}
                  comment={item.jumlah_comment}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 col-span-full w-full flex flex-col gap-5">
            <span className="text-h5">Artikel Terbaru</span>
            <div className="flex flex-col gap-5">
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default beranda;
