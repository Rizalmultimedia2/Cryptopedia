import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc, query } from "firebase/firestore";
import { getAllDataFromFirestore } from "./api/getData";
import { useUser } from "@/context/user";

function test() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Sharing"));
      const get = await getAllDataFromFirestore(q);
      setData(get);
    };
    fetchData();

    const number = Math.floor(Math.random() * 10);

    console.log(number);
  }, []);
  console.log(data);
  return (
    <>
      {/* <div className="container flex-center my-10 gap-3 bg-primary-1 p-10">
        <label htmlFor="angka">Masukkan angka : </label>
        <input
          type="text"
          id="angka"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Klik</button>
        <div>Angka itu adalah {ganjil}</div>
      </div> */}
      {data && data.map((item) => <div>{item.sharing_title}</div>)}
    </>
  );
}

export default test;
