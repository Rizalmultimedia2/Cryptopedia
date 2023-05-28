import React, { useEffect, useState } from "react";
import { FiBookmark, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import IconBookmark from "../Button/IconBookmark";
import IconKebab from "../Button/IconKebab";
import { format } from "date-fns";
import { getOneDataFromFirestore } from "@/pages/api/getData";
import LikeDislike from "../Button/LikeDislike";

function CryptoSharingDetail({
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
  line,
}) {
  const getKategori = (kategori) => {
    switch (kategori) {
      case 0:
        return "Semua";
      case 1:
        return "Tren";
      case 2:
        return "Teknikal & Fundamental";
      case 3:
        return "General";
    }
  };

  const [formattedDate, setFormattedDate] = useState();

  useEffect(() => {
    const fetchFormattedDate = async () => {
      if (tanggal) {
        const convertedDate = tanggal.toDate();
        const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");
        setFormattedDate(formattedDate);
      }
    };

    fetchFormattedDate();
  }, [tanggal]);
  console.log("tanggalnya format", formattedDate);

  return (
    <>
      <div className="sharing-card w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="text-h5 flex-center-between">
            <div>{title}</div>
            <div className="flex flex-row">
              <IconBookmark />
              <IconKebab />
            </div>
          </div>
          <div className="flex-center-between">
            <span className="font-bold text-h6 text-primary-1">{username}</span>
            <span className="text-p3">
              {formattedDate ? formattedDate : null}
            </span>
          </div>
        </div>
        <div className={!line ? "" : "line-clamp-2"}>{body}</div>
        <div className="flex flex-col gap-3">
          <div className="flex-center rounded-md text-p3 text-black py-1 px-4 w-fit bg-primary-4 font-bold">
            {getKategori(kategori)}
          </div>
          <div className="flex-center-between text-p2">
            <span className="text-black">{tag}</span>
            <div className="flex flex-row gap-5">
              <div className="item-reaction-click">
                <FaRegCommentDots />
                <span className="text-p21">{comment}</span>
              </div>
              <LikeDislike like={like} dislike={dislike} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSharingDetail;
