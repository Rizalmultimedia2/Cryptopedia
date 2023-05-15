import {
  FiPlus,
  FiChevronLeft,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import Header from "@/components/Header/Header";
import React from "react";
import Footer from "@/components/Footer";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Banner from "@/components/Banner";
import Komentar from "@/components/Komentar";

function detail() {
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-6">
        <a href="/cryptosharing">
          <FiChevronLeft className="inline" />
          <span>Kembali</span>
        </a>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-4">
            <CryptoSharing />
            <h5 className="text-h5">Komentar</h5>
            <div>
              <form class="flex flex-row gap-5 items-center">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="2"
                  class="text-sm py-2 px-4 w-full basis-5/6 bg-white rounded-lg border border-gray-4 text-black focus:outline-none focus:ring-[2px] focus:ring-primary-1 focus:border-primary-1"
                  placeholder="Berikan komentar"
                  required
                ></textarea>
                <button
                  type="submit"
                  class="button-normal basis-1/6 h-fit w-fit"
                >
                  Komentar
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4">
              <Komentar />
              <Komentar />
              <Komentar />
              <Komentar />
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
        <div className="flex flex-col gap-6">
          <h4 className="text-h4">Forum Lainnya</h4>
          <div className="flex flex-row gap-6">
            <CryptoSharing />
            <CryptoSharing />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default detail;
