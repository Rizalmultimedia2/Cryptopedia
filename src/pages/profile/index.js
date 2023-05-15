import { FiPlus } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import { DataForum } from "@/Utils/CryptoSharing";
import Image from "next/image";
import InputForm from "@/components/InputForm";

function index() {
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-row gap-8 items-center justify-center flex-wrap">
          <div className="relative h-[200px] w-[200px] rounded-full">
            <Image
              src="/image/artikel.png"
              fill
              className="rounded-full object-cover border-2 border-primary-1"
            />
          </div>
          <div className="flex lg:flex-row p-3 gap-7 border-2 border-primary-1 rounded-xl flex-col">
            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Account Data</h5>
              <div className="form-input">@yourusername</div>
              <div className="form-input">@youremail</div>
              <a className="button-normal w-fit" href="3">
                Ubah kata sandi
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="text-h5">Personal data</h5>
              <form action="" className="flex flex-col gap-3">
                <InputForm
                  id="fullname"
                  type="text"
                  placeholder="Nama lengkap"
                />
                <label for="trader" className="sr-only"></label>
                <select name="" id="trader" className="form-input">
                  <option value="" disabled selected hidden>
                    Trader
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <button type="submit" className="button-normal w-fit">
                  Edit profile
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h4 className="text-h4 text-black">My Post</h4>
              <Searchbar placeholder="Cari postingan" />
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default index;
