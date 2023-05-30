import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import Loading from "../Loading";

function ItemBookmarkStarting({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Starting", id);
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
      <a className="item-bookmark ring-hover-item" href="#">
        <FiBookmark className="text-[20px] text-primary-2 fill-primary-2" />
        {isLoading && <Loading />}
        {data && data.starting_title}
      </a>
    </>
  );
}

export default ItemBookmarkStarting;
