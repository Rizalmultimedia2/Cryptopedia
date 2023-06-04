import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { db } from "../../../firebaseConfig";
import Loading from "../Loading";
import Link from "next/link";

function ItemBookmarkStarting({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Starting", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Dokumen tidak ditemukan");
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Link
        className="item-bookmark ring-hover-item"
        href={`/crypto101?materi=${id}`}
      >
        <FiBookmark className="text-[20px] text-primary-2 fill-primary-2" />
        {isLoading && <Loading />}
        {data && data.starting_title}
      </Link>
    </>
  );
}

export default ItemBookmarkStarting;
