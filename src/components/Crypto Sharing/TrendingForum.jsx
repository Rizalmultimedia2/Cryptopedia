import React, { useEffect, useState } from "react";
import CryptoSharing from "./CryptoSharingCard";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { format } from "date-fns";

function TrendingForum() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      try {
        const q = query(
          collection(db, "Sharing"),
          orderBy("total_comments", "desc"),
          limit(1)
        );
        const querySnapshot = await getDocs(q);

        const dataList = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const convertedDate = data.date.toDate();
          const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");

          dataList.push({
            id: doc.id,
            ...data,
            date: formattedDate,
          });
          setData(dataList);
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fethData();
  }, []);

  return (
    <>
      <div className="flex-center flex-col px-5 py-4 gap-3 border border-gray-4 rounded-lg">
        <h4 className="text-h4 text-primary-1">Trending Forum</h4>
        {data.map((item, index) => (
          <CryptoSharing
            title={item.sharing_title}
            key={index}
            username="Rizal Herliansyah"
            waktu="nanti"
            tanggal={item.date}
            body={item.sharing_body}
            kategori={item.category}
            tag={item.tags}
            likes={item.likes}
            dislikes={item.dislikes}
            comment={item.total_comments}
            id={item.id}
            line="yes"
          />
        ))}
      </div>
    </>
  );
}

export default TrendingForum;
