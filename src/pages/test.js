import Artikel from "@/components/Artikel";
import CryptoMateri from "@/components/CryptoMateriCard";
import CryptoSharing from "@/components/CryptoSharingCard";
import Komentar from "@/components/Komentar";
import MyBookmark from "@/components/MyBookmark";
import Searchbar from "@/components/Searchbar";
import TrendingForum from "@/components/TrendingForum";
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
