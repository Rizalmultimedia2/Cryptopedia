import Artikel from "@/components/Artikel/Artikel";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Komentar from "@/components/Komentar";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Searchbar from "@/components/Searchbar";
import TrendingForum from "@/components/Crypto Sharing/TrendingForum";
import React from "react";

function test() {
  return (
    <div>
      <TrendingForum />
      <Komentar />
      <Searchbar />
      <Artikel />
      <CryptoMateri />
      <CryptoSharing />
      <MyBookmark />
    </div>
  );
}

export default test;
