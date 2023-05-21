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
import { GoKebabVertical } from "react-icons/go";

function test() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={toggleDropdown}
        >
          Toggle Dropdown
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 left-0 bg-white border border-gray-300 p-4">
            <ul>
              <li onClick={openModal}>Open Modal</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
        {isModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4">
              <h2>Modal Title</h2>
              <p>This is the modal content.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default test;
