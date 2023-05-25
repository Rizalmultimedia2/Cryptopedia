import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import Swal from "sweetalert2";

function IconBookmark() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      Swal.fire({
        icon: "success",
        title: "Berhasil Bookmark",
      });
    }
  }, [isActive]);

  return (
    <>
      <FiBookmark
        className={`text-primary-1 cursor-pointer ${
          isActive ? "fill-primary-1" : ""
        }`}
        onClick={handleClick}
      />
    </>
  );
}

export default IconBookmark;
