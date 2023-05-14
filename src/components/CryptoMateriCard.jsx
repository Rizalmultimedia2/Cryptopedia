import React from "react";
import { FiBookmark } from "react-icons/fi";

function CryptoMateri() {
  return (
    <>
      <div className="flex flex-col border border-primary-1 p-[16px] gap-[13px] rounded-lg bg-white">
        <div className="flex flex-col gap-[5px]">
          <div className="flex text-h5 items-center justify-between">
            <span>Apa itu Arbitrase?</span>
            <div>
              <FiBookmark className="text-primary-1" />
            </div>
          </div>
          <div className="level">Pemula</div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          asperiores harum optio quod ad debitis explicabo reiciendis nobis
          earum placeat quasi recusandae quas eveniet doloremque cupiditate
          quidem, eum quae dolor!
        </div>
      </div>
    </>
  );
}

export default CryptoMateri;
