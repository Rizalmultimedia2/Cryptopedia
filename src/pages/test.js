import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc, query } from "firebase/firestore";
import { getAllDataFromFirestore } from "./api/getData";
import { useUser } from "@/context/user";

function test() {
  const [number, setNumber] = useState();
  const [ganjil, setGanjil] = useState("");

  function handleClick() {
    console.log(number);
    if (number % 2 == 0) {
      setGanjil("Genap");
    } else {
      setGanjil("Ganjil");
    }
  }

  return (
    <>
      <div className="container flex-center my-10 gap-3 bg-primary-1 p-10">
        <label htmlFor="angka">Masukkan angka : </label>
        <input
          type="text"
          id="angka"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Klik</button>
        <div>Angka itu adalah {ganjil}</div>
      </div>
    </>
  );
}

export default test;
