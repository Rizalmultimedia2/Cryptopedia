import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import IconBookmark from "../Button/IconBookmark";
import IconKebab from "../Button/IconKebab";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function CryptoSharing({
  title,
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

  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "Users"),
        where("created_sharing", "array-contains", id)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        setDataUser(user);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="sharing-card w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="text-h5 flex-center-between">
            <a href={`/cryptosharing/${id}`}>{title}</a>
            <div className="flex flex-row">
              <IconBookmark post_id={id} field="saved_sharing" />
              <IconKebab />
            </div>
          </div>
          <div className="flex-center-between">
            <span className="font-bold text-h6 text-primary-1">
              {dataUser.username}
            </span>
            <span className="text-p3">{tanggal}</span>
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
            <span className="text-black">@{tag}</span>
            <div className="flex flex-row gap-5">
              <div className="item-reaction">
                <FaRegCommentDots />
                <span>{comment}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsDown className="text-red-1" />
                <span>{dislike}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsUp className="text-primary-2" />
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
