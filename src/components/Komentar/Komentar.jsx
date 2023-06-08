import {
  collection,
  doc,
  getDoc,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAllDataFromFirestore } from "@/pages/api/getData";
import { db } from "../../../firebaseConfig";
import DataKomentar from "./DataKomentar";
import Image from "next/image";

function Komentar({ idPost }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (idPost) {
        const q = query(
          collection(db, "Comments"),
          where("sharing_id", "==", idPost),
          orderBy("date", "desc")
        );

        const dataList = await getAllDataFromFirestore(q);
        setData(dataList);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data && data.length ? (
        data.map((item, index) => (
          <DataKomentar
            key={index}
            comment={item.comment}
            user_id={item.user_id}
            post_id={item.post_id}
            date={item.date}
            comment_id={item.id}
          />
        ))
      ) : (
        <>
          <div className="flex-center flex-col">
            <Image
              src="/empty_state/no_msg.svg"
              width={365}
              height={186}
              alt="no-comment"
              className="my-1"
            />
            <p className="text-p1">Tidak ada Komentar</p>
          </div>
        </>
      )}
    </>
  );
}

export default Komentar;

<div
  className={
    "lg:flex flex-grow items-center justify-between items-end pl-[250px] w-full  lg:w-auto lg:order-1" +
    (navOpen ? " absolute" : " hidden")
  }
  id="mobile-menu-2"
></div>;
