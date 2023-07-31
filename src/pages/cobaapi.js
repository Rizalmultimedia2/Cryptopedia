import { collection, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { getAllDataFromFirestore } from "./api/getData";

function cobaapi() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Sharing"));
      const get = await getAllDataFromFirestore(q);
      setData(get);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <table>
        <tr>
          <th>Judul</th>
          <th>jumlah like</th>
          <th>jumlah dislike</th>
        </tr>
        {data &&
          data.map((item, index) => (
            <tr id={index}>
              <td>{item.sharing_title}</td>
              <td>{item.likes}</td>
              <td>{item.dislikes}</td>
            </tr>
          ))}
      </table>
    </>
  );
}

export default cobaapi;
