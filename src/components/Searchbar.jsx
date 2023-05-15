import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar({ placeholder }) {
  return (
    <>
      <form
        action=""
        className="flex flex-row items-center rounded-[5px] h-[45px]"
      >
        <label
          for="searchbar"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <input
          type="search"
          id="searchbar"
          className="searchbar outline-0"
          placeholder={placeholder}
          required
        />
        <a
          href=""
          className="flex items-center p-[10px] h-full border border-gray-4 rounded-br-[5px] rounded-tr-[5px]"
        >
          <FiSearch className="" />
        </a>
      </form>
    </>
  );
}

export default Searchbar;
