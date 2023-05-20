import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import SelectCategory from "@/components/Select/SelectCategory";
import Banner from "@/components/Banner";
import { DataMateri } from "@/Utils/Crypto101";
import Modal from "@/components/Modal/Modal";
import ItemModal from "@/components/Modal/ItemModal";
import SelectLevel from "@/components/Select/SelectLevel";

function index() {
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="text-h3">Crypto 101</h3>
            <Modal
              icon={1}
              name="Buat Diskusi"
              button={1}
              size={550}
              title="Buat Materi Baru"
              Children={[
                <ItemModal
                  label="Judul"
                  id="title"
                  type="text"
                  placeholder="Masukkan judul"
                />,
                <div>
                  <label for="comment" class="text-p2">
                    Masukkan isi materi
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    class="textarea-modal"
                    placeholder="Masukkan isi diskusi"
                    required
                  ></textarea>
                </div>,
                <div className="flex flex-col w-full gap-1">
                  <span class="text-p2">Category</span>
                  <ul className="flex flex-row text-h7 rounded-lg w-fit overflow-hidden">
                    <SelectCategory value="1" label="Pemula" style="category" />
                    <SelectCategory
                      value="2"
                      label="Menengah"
                      style="category"
                    />
                    <SelectCategory value="3" label="Ahli" style="category" />
                  </ul>
                </div>,
              ]}
            ></Modal>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" />
            </ul>
            <div>
              <Searchbar placeholder="Cari Materi" />
            </div>
            <div className="flex flex-col gap-5">
              {DataMateri.map((item) => (
                <CryptoMateri
                  title={item.title}
                  level={item.level}
                  body={item.body}
                  id={1}
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
                title="Sudah siap belajar crypto lebih lanjut?"
                body="Bergabung dalam diskusi untuk tingkatkan pemahamanmu didalam cryptocurrency"
                link="/cryptosharing"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
