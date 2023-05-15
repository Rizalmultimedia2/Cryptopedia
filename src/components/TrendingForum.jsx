import React from "react";
import CryptoSharing from "./Crypto Sharing/CryptoSharingCard";

function TrendingForum() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5 py-[15px] gap-3 border border-gray-4 rounded-lg">
        <h4 className="text-h4 text-primary-1">Trending Forum</h4>
        <CryptoSharing
          title="Bitcoin"
          username="Rizal Herliansyah Hidayat"
          waktu="1 jam yang lalu"
          tanggal="12-12-2023"
          body=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?"
          kategori={1}
          tag="#USDT #BUSD"
          like={10}
          dislike={5}
          comment={2}
        />
      </div>
    </>
  );
}

export default TrendingForum;
