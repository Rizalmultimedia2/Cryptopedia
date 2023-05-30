import React, { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import IconBookmark from "../Button/IconBookmark";
import IconKebab from "../Button/IconKebab";
import { format } from "date-fns";
import LikeDislike from "../Button/LikeDislike";

function CryptoSharingDetail({
  title,
  username,
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

  return (
    <>
      <div className="sharing-card w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="text-h5 flex-center-between">
            <div>{title}</div>
            <div className="flex flex-row">
              <IconBookmark field="saved_sharing" post_id={id} />
              <IconKebab post_id={id} card={""} />
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
            <span className="text-black">#{tag}</span>
            <div className="flex flex-row gap-5">
              <div className="item-reaction-click">
                <FaRegCommentDots />
                <span className="text-p21">{comment}</span>
              </div>
              <LikeDislike getLike={like} getDislike={dislike} post_id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSharingDetail;
