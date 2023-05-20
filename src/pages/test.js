import Artikel from "@/components/Artikel/Artikel";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Komentar from "@/components/Komentar";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Searchbar from "@/components/Searchbar";
import TrendingForum from "@/components/Crypto Sharing/TrendingForum";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { modalSw } from "@/components/Modal_sw";
import Modal from "@/components/Modal/Modal";

function test() {
  const [selected, setSelected] = useState("yes");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    // <div>
    <div>
      <div>
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={selected === "yes"}
          onChange={handleChange}
        />
        <label htmlFor="yes">Yes</label>

        <input
          type="radio"
          id="no"
          name="choose"
          value="no"
          onChange={handleChange}
          checked={selected === "no"}
        />
        <label htmlFor="no">No</label>

        <input
          type="radio"
          id="maybe"
          name="choose"
          value="maybe"
          onChange={handleChange}
          checked={selected === "maybe"}
        />
        <label htmlFor="maybe">Maybe</label>
      </div>
    </div>
  );
}

export default test;
