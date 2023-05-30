import { collection, doc, getDoc, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAllDataFromFirestore } from "@/pages/api/getData";
import { db } from "../../../firebaseConfig";
import DataKomentar from "./DataKomentar";

function Komentar({ idPost }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "Comments"),
        where("post_id", "==", idPost)
      );
      // console.log("q adalah", q);

      const dataList = await getAllDataFromFirestore(q);
      setData(dataList);
    };
    fetchData();
  }, []);

  // console.log("data post", idPost);
  return (
    <>
      {data
        ? data.map((item, index) => (
            <DataKomentar
              key={index}
              comment={item.comment}
              user_id={item.user_id}
              post_id={item.post_id}
              date={item.date}
            />
          ))
        : null}
    </>
  );
}

export default Komentar;
