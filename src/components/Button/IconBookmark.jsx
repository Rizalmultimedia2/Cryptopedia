import { useUser } from "@/context/user";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";

function IconBookmark({ post_id, field }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      try {
        const docRef = doc(db, "Users", user.uid);
        const bookmarkedPosts = await getDoc(docRef);
        const dataBookmark = bookmarkedPosts.data().saved_sharing;
        setIsBookmarked(dataBookmark.includes(post_id));
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    checkBookmarkStatus();
  }, []);

  const handleClick = async () => {
    const docRef = doc(db, "Users", user.uid);

    try {
      if (isBookmarked) {
        console.log("is bookmark", isBookmarked);
        // Menghapus bookmark
        await updateDoc(docRef, {
          saved_sharing: arrayRemove(post_id),
        });
        setIsBookmarked(false);
      } else {
        console.log("is bookmark", isBookmarked);
        // Menambahkan bookmark
        await updateDoc(docRef, {
          saved_sharing: arrayUnion(post_id),
        });
        setIsBookmarked(true);
        Swal.fire({
          icon: "success",
          title: "Berhasil Bookmark",
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
      <FiBookmark
        className={`text-primary-1 cursor-pointer ${
          isBookmarked ? "fill-primary-1" : ""
        }`}
        onClick={handleClick}
      />
    </>
  );
}

export default IconBookmark;
