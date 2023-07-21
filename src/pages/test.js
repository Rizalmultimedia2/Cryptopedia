import { collection, limit, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { getAllDataFromFirestore } from "./api/getData";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";

function test() {
  const [data, setData] = useState([]);
  useState(() => {
    const fetchData = async () => {
      try {
        const getSharing = query(
          collection(db, "Sharing"),
          orderBy("date", "asc")
        );
        const getData = await getAllDataFromFirestore(getSharing);
        setData(getData);
      } catch (error) {}
    };

    fetchData();
  }, []);

  console.log("data", data);
  return (
    <>
      <div className="container bg-primary-1 flex-center flex-col p-20 gap-5">
        {data.map((item, index) => (
          <CryptoSharing
            title={item.sharing_title}
            tanggal={item.date}
            body={item.sharing_body}
            kategori={item.category}
            tag={item.tags}
            likes={item.likes}
            dislikes={item.dislikes}
            comment={item.total_comments}
            id={item.id}
            line="yes"
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default test;
