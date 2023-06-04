import React, { useEffect, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import IconBookmark from "../Button/IconBookmark";
import IconKebab from "../Button/IconKebab";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";

function CryptoSharing({
  title,
  tanggal,
  body,
  kategori,
  tag,
  likes,
  dislikes,
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
      try {
        const q = query(
          collection(db, "Users"),
          where("created_sharing", "array-contains", id)
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const user = doc.data();
          console.log("datanya siapa aja emang", user.username);
          setDataUser(user);
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="sharing-card w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="text-h5 flex-center-between">
            <Link href={`/cryptosharing/${id}`}>{title}</Link>
            <div className="flex flex-row">
              <IconBookmark post_id={id} field="saved_sharing" />
              <IconKebab post_id={id} card={"y"} />
            </div>
          </div>
          <div className="flex-center-between flex-wrap-reverse">
            <span className="font-bold text-h6 text-primary-1">
              {dataUser.username}
            </span>
            <span className="text-p3">{tanggal}</span>
          </div>
        </div>
        <Link
          className={!line ? "" : "line-clamp-2"}
          href={`/cryptosharing/${id}`}
        >
          {body}
        </Link>
        <div className="flex flex-col gap-3">
          <div className="flex-center rounded-md text-p3 text-black py-1 px-4 w-fit bg-primary-4 font-bold">
            {getKategori(kategori)}
          </div>
          <div className="flex-center-between text-p2">
            <span className="text-black">#{tag}</span>
            <div className="flex flex-row gap-5">
              <div className="item-reaction">
                <FaRegCommentDots />
                <span>{comment}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsDown className="text-red-1" />
                <span>{dislikes}</span>
              </div>
              <div className="item-reaction">
                <FiThumbsUp className="text-primary-2" />
                <span>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSharing;
