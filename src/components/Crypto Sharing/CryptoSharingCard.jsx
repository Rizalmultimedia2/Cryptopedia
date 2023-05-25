import React from "react";
import { GoKebabVertical } from "react-icons/go";
import { FiBookmark, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import IconBookmark from "../Button/IconBookmark";
import IconKebab from "../Button/IconKebab";

function CryptoSharing({
  title,
  username,
  waktu,
  tanggal,
  body,
  kategori,
  tag,
  like,
  dislike,
  comment,
  id,
  line,
}) {
  const getKategori = (kategori) => {
    switch (kategori) {
      case 1:
        return "Semua";
      case 2:
        return "Tren";
      case 3:
        return "Teknikal & Fundamental";
      case 4:
        return "General";
    }
  };

  const handleClick = () => {};

  return (
    <>
      <div className="sharing-card">
        <div className="flex flex-col gap-[5px]">
          <div className="text-h5 flex-center-between">
            <a href={`/cryptosharing/${id}`}>{title}</a>
            <div className="flex flex-row">
              <IconBookmark />
              <IconKebab />
            </div>
          </div>
          <div className="flex-center-between">
            <span className="font-bold text-h6 text-primary-1">{username}</span>
            <span className="text-p3">{waktu}</span>
          </div>
        </div>
        <a
          className={!line ? "" : "line-clamp-2"}
          href={`/cryptosharing/${id}`}
        >
          {body}
        </a>
        <div className="flex flex-col gap-3">
          <div className="flex-center rounded-md text-p3 text-black py-1 px-4 w-fit bg-primary-4 font-bold">
            {getKategori(kategori)}
          </div>
          <div className="flex-center-between text-p2">
            <span className="text-black">{tag}</span>
            <div className="flex flex-row gap-5">
              <div className="item-reaction">
                <FaRegCommentDots className="cursor-pointer" />
                <span>{comment}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsDown className="text-red-1 cursor-pointer" />
                <span>{dislike}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsUp className="text-primary-2 cursor-pointer" />
                <span>{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSharing;
