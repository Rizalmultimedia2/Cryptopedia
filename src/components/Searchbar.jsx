import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar() {
  return (
    <>
      <form
        action=""
        className="flex flex-row items-center rounded-[5px] w-[384px] h-[45px]"
      >
        <label
          for="searchbar"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="flex items-center p-[10px] ml-[5px] h-full border border-gray-4 rounded-bl-[5px] rounded-tl-[5px]">
          <FiSearch className="" />
        </div>
        <input
          type="search"
          id="searchbar"
          className="searchbar"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="ml-[10px] p-[10px] bg-primary-1 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Searchbar;
