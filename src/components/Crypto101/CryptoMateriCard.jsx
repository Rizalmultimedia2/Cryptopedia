import React from "react";
import { FiBookmark } from "react-icons/fi";

function CryptoMateri({ title, level, body }) {
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Pemula";
      case 2:
        return "Menengah";
      case 3:
        return "Ahli";
    }
  };

  const getColor = (level) => {
    if (level == 1) {
      return "#29BF9F";
    } else if (level == 2) {
      return "#FACA21";
    } else if (level == 3) {
      return "#E96E70";
    }
  };

  return (
    <>
      <a className="sharing-card" href="#">
        <div className="flex flex-col gap-[5px]">
          <div className="flex text-h5 items-center justify-between">
            <span>{title}</span>
            <div>
              <FiBookmark className="text-primary-1" />
            </div>
          </div>
          <div className="level" style={{ background: getColor(level) }}>
            {getLevel(level)}
          </div>
        </div>
        <div>{body}</div>
      </a>
    </>
  );
}

export default CryptoMateri;
