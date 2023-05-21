import React, { useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import SharingModal from "../Modal/SharingModal";
import DeleteModal from "../Modal/DeleteModal";
import LaporkanDiskusi from "../Crypto101/LaporkanDiskusi";

function IconKebab() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <GoKebabVertical className="cursor-pointer" onClick={handleClick} />
      {isVisible ? (
        <>
          <div className="relative bg-black">
            <div className="absolute top-[120%] right-[100%] z-40">
              <div className="flex flex-col bg-primary-1 text-light-color text-p2 font-medium px-4 py-3 gap-1 rounded-l ">
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <LaporkanDiskusi title="Laporkan Diskusi" />
                </div>
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <SharingModal
                    name="Edit diskusi"
                    title="Edit Diskusi"
                    button={0}
                    Icon={0}
                  ></SharingModal>
                </div>
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <DeleteModal button={0} title="Hapus Diskusi" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default IconKebab;
