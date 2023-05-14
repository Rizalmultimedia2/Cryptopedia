import React from "react";
import CryptoSharing from "./CryptoSharingCard";

function TrendingForum() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5 py-[15px] gap-3 border border-gray-4 rounded-lg">
        <h4 className="text-h4 text-primary-1">Trending Forum</h4>
        <CryptoSharing />
      </div>
    </>
  );
}

export default TrendingForum;
