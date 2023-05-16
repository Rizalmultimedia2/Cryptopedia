import { FiPlus } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import TrendingForum from "@/components/Crypto Sharing/TrendingForum";
import SelectCategory from "@/components/SelectCategory";
import Banner from "@/components/Banner";
import { DataForum } from "@/Utils/CryptoSharing";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-h3">Crypto Sharing</h3>
          <div className="flex justify-between">
            <span className="text-p1">
              Belajar Cryptocurrency lebih mudah dengan berdiskusi
            </span>
            <button className="button-normal flex gap-3">
              <FiPlus /> Buat Diskusi
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <div>
              <TrendingForum />
            </div>

            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectCategory value="semua" label="Semua" style="category" />
              <SelectCategory value="tren" label="Tren" style="category" />
              <SelectCategory
                value="teknikal"
                label="Teknikal & Fundamental"
                style="category"
              />
              <SelectCategory
                value="general"
                label="General"
                style="category"
              />
              <SelectCategory
                value="mypost"
                label="Postingan saya"
                style="category"
              />
            </ul>
            <div>
              <Searchbar placeholder="Cari Diskusi" />
            </div>
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
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
            <div>
              <Banner
                title="Baru Belajar Crypto?"
                body="Pelajari crypto 101 agar kamu lebih siap dalam berdiskusi"
                link="/crypto101"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default artikel;
