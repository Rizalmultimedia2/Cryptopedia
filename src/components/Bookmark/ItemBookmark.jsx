import React from "react";
import { FiBookmark } from "react-icons/fi";

function ItemBookmark() {
  return (
    <>
      <a className="item-bookmark ring-hover-item" href="#">
        <FiBookmark className=" text-[20px] text-primary-2" />
        <p className="">Testing Bookmark</p>
      </a>
    </>
  );
}

export default ItemBookmark;
