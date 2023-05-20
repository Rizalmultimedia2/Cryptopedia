import React, { useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import { FiAlertTriangle, FiEdit, FiTrash } from "react-icons/fi";

function IconKebab() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <GoKebabVertical className="cursor-pointer" onClick={handleClick} />
      {isVisible ? (
        <div className="absolute">
          <div className="flex flex-col bg-primary-1 text-light-color text-p2 font-medium px-4 py-3 gap-1 rounded-lg translate-y-[20%] translate-x-[-70%] z-50">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <FiAlertTriangle />
              Laporkan
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <FiEdit />
              Edit
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <FiTrash />
              Hapus
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default IconKebab;
