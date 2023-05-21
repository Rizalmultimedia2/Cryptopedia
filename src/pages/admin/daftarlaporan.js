import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import React from "react";

function daftarlaporan() {
  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div>
          <h3 className="text-h3">Daftar Laporan Crypto Sharing</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default daftarlaporan;
