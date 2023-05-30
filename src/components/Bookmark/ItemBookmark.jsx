import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { db } from "../../../firebaseConfig";

function ItemBookmark({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Sharing", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Dokumen tidak ditemukan");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <a
        className="item-bookmark ring-hover-item"
        href={`/cryptosharing/${id}`}
      >
        <FiBookmark className="text-[20px] text-primary-2 fill-primary-2" />
        {data.sharing_title}
      </a>
    </>
  );
}

export default ItemBookmark;
