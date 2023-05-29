import React, { useEffect, useState } from "react";
import ItemBookmark from "./ItemBookmark";
import SelectBookmark from "../Select/SelectBookmark";
import { getAllDataFromFirestore } from "@/pages/api/getData";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useUser } from "@/context/user";
import ItemBookmarkStarting from "./ItemBookmarkStarting";

function MyBookmark() {
  const [bookmarkSharing, setBookmarkSharing] = useState([]);
  const [optionBookmark, setOptionBookmark] = useState("Sharing");
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Users", user.uid);
      const dataList = await getDoc(docRef);
      if (optionBookmark == "Sharing") {
        console.log("Masuk ke sharing", dataList.data().saved_sharing);
        setBookmarkSharing(dataList.data().saved_sharing);
      } else if (optionBookmark == "Starting") {
        console.log("Masuk ke starting", dataList.data().saved_starting);
        setBookmarkSharing(dataList.data().saved_starting);
      }
    };

    fetchData();
  }, [optionBookmark]);
  return (
    <>
      <div className="flex-center flex-col bg-white border border-gray-4 rounded-lg px-5 py-6 gap-5 z-10">
        <p className="text-h4 text-primary-1 font-bold">MyBookmark</p>
        <div className="flex flex-col w-full gap-3">
          <ul className="flex items-center justify-start gap-3 ">
            <SelectBookmark tabel={setOptionBookmark} />
          </ul>
          <div className="flex flex-col gap-4 my-2">
            {console.log(
              "Sebelum ke item bookmark",
              optionBookmark,
              bookmarkSharing
            )}
            {optionBookmark == "Sharing"
              ? bookmarkSharing.map((item, index) => (
                  <ItemBookmark key={index} id={item} tabel="Sharing" />
                ))
              : bookmarkSharing.map((item, index) => (
                  <ItemBookmarkStarting
                    key={index}
                    id={item}
                    tabel="Starting"
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookmark;
