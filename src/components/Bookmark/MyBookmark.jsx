import React, { useEffect, useState } from "react";
import ItemBookmark from "./ItemBookmark";
import SelectBookmark from "../Select/SelectBookmark";
import { getAllDataFromFirestore } from "@/pages/api/getData";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useUser } from "@/context/user";
import ItemBookmarkStarting from "./ItemBookmarkStarting";
import Image from "next/image";

function MyBookmark() {
  const [sharing, setSharing] = useState([]);
  const [starting, setStarting] = useState([]);
  const [optionBookmark, setOptionBookmark] = useState("Sharing");
  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Users", user.uid);
      const dataList = await getDoc(docRef);
      setSharing(dataList.data().saved_sharing);
      setStarting(dataList.data().saved_starting);
    };

    fetchData();
  }, [optionBookmark]);

  return (
    <>
      <div className="flex-center flex-col bg-white border border-gray-4 rounded-lg px-5 py-6 gap-5 z-10 ">
        <p className="text-h4 text-primary-1 font-bold">MyBookmark</p>
        <div className="flex flex-col w-full gap-3">
          <ul className="flex items-center justify-start gap-3 ">
            <SelectBookmark tabel={setOptionBookmark} />
          </ul>
          <div className="flex flex-col gap-1 border-t-2 max-h-[300px] overflow-x-visible overflow-y-scroll">
            {optionBookmark == "Sharing" ? (
              sharing && sharing.length ? (
                sharing.map((item, index) => (
                  <ItemBookmark key={index} id={item} />
                ))
              ) : (
                <div className="flex-center flex-col">
                  <Image
                    src="/empty_state/no_bookmark.svg"
                    width={200}
                    height={120}
                    alt="no-bookmark"
                    className="my-1 mt-4"
                  />
                  <p className="text-p22">Tidak ada Bookmark</p>
                </div>
              )
            ) : starting && starting.length ? (
              starting.map((id, index) => (
                <ItemBookmarkStarting key={index} id={id} />
              ))
            ) : (
              <div className="flex-center flex-col">
                <Image
                  src="/empty_state/no_bookmark.svg"
                  width={200}
                  height={120}
                  alt="no-bookmark"
                  className="my-1 mt-4"
                />
                <p className="text-p22">Tidak ada Bookmark</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookmark;
