import React from "react";
import { FiBookmark } from "react-icons/fi";

function MyBookmark() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[456px] bg-white border border-gray-4 rounded-lg px-[20px] py-[24px] gap-[20px]">
        <p className="text-h4 text-primary-1 font-bold">MyBookmark</p>
        <div className="flex flex-col w-full gap-[12px]">
          <div className="flex items-center justify-star gap-[12px]">
            <span className="text-p2 text-primary-1 font-semibold">
              Crypto Sharing
            </span>
            <span className="text-p2 text-black font-semibold">Crypto 101</span>
          </div>
          <div className="flex flex-row items-center text-p2 bg-[#CDEDE6] p-[10px] rounded-md border border-primary-1 gap-[10px]">
            <FiBookmark className=" text-[20px] text-primary-2" />
            <p className="">Testing Bookmark</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookmark;
