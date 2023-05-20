import Artikel from "@/components/Artikel/Artikel";
import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import { DataArtikel } from "@/Utils/Artikel";
import Footer from "@/components/Footer";
import SelectCategory from "@/components/Select/SelectCategory";
import Modal from "@/components/Modal/Modal";
import ItemModal from "@/components/Modal/ItemModal";
import SelectLevel from "@/components/Select/SelectLevel";

function artikel() {
  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <Modal
            icon={1}
            name="Tambah artikel"
            button={1}
            size={700}
            title="Tambah artikel"
            Children={[
              <ItemModal
                icon={1}
                label="Judul"
                id="title"
                type="text"
                placeholder="Masukkan judul"
              />,
              <div className="w-full">
                <label For="level">Level</label>
                <select name="" id="level" className="form-input w-full">
                  <option value="" disabled selected hidden>
                    Level
                  </option>
                  <option value="Pemula">Pemula</option>
                  <option value="Menengah">Menengah</option>
                  <option value="Ahli">Ahli</option>
                </select>
              </div>,
              <div>
                <label for="body" class="text-p2">
                  Konten
                </label>
                <textarea
                  id="body"
                  rows="8"
                  class="textarea-modal"
                  placeholder="Isi Konten"
                  required
                ></textarea>
              </div>,
              <ItemModal label="Gambar" id="gambar" type="image" />,
            ]}
          ></Modal>

          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar placeholder="Cari artikel" />
            </div>
            <div className="flex flex-row items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-visible">
                <SelectLevel style="level" />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px]">
          {DataArtikel.map((item) => (
            <Artikel
              body={item.body}
              title={item.title}
              level={item.level}
              date={item.date}
              id={1}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default artikel;
