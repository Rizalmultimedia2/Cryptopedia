import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";

function IconBookmark() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

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
