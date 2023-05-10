import React from "react";
import { FiBookmark, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

function CryptoSharing() {
  return (
    <>
      <div className="flex flex-col w-[714px] border border-primary-1 p-[16px] gap-[10px] rounded-lg bg-white">
        <div className="flex flex-col gap-[5px]">
          <div className="flex text-h5 items-center justify-between">
            <span>Altcoin apa yang akan terbang?</span>
            <div>
              <FiBookmark className="text-primary-1" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-h6 text-primary-1">
              Rizal Herliansyah Hidayat
            </span>
            <span className="text-p3">1 jam yang lalu</span>
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          asperiores harum optio quod ad debitis explicabo reiciendis nobis
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex justify-center items-center rounded-md text-p3 text-black py-[3px] py-[3px] h-[30px] w-[77px] bg-primary-4 font-bold">
            Tren
          </div>
          <div className="flex justify-between items-center">
            <span className="text-p3 text-black">#USDT #BUSD</span>
            <div className="flex flex-row text-p3 gap-[10px]">
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <span className="text-p2">0</span>
                <FaRegCommentDots className="text-p2" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <span className="text-p2">0</span>
                <FiThumbsDown className="text-p2 text-red-1" />
              </div>
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <span className="text-p2">0</span>
                <FiThumbsUp className="text-p2 text-primary-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSharing;
