import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import Loading from "../Loading";

function ItemBookmarkStarting({ starting_id, tabel }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = JSON.stringify(starting_id);
      const docRef = doc(db, "Starting", data);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("Dokumen tidak ditemukan");
      }
      setIsLoading(false);
    };

    fetchData();
  }, [starting_id]);

  return (
    <>
      <a className="item-bookmark ring-hover-item" href="#">
        <FiBookmark className="text-[20px] text-primary-2 fill-primary-2" />
        {isLoading && <Loading />}
        {data && data.starting_title}
      </a>
    </>
  );
}

export default ItemBookmarkStarting;
