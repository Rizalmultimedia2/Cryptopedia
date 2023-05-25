import { collection, writeBatch, addDoc, doc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const dateString = "01/20/2023 23:31:30";
const dateObject = new Date(dateString);
// const timestamp = Timestamp.fromDate(dateObject);
const timestamp = "01/20/2023 23:31:30";

export const DataArtikel = [
  {
    articles_title: "Apa itu bitcoin",
    like: 20,
    dislike: 10,
    level: 1,
    date: timestamp,
    articles_body:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?",
  },
  {
    articles_title: "Etherium Adalah",
    like: 20,
    dislike: 10,
    level: 2,
    date: timestamp,
    articles_body:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?",
  },
  {
    articles_title: "Altcoin bullish",
    like: 20,
    dislike: 10,
    level: 3,
    date: timestamp,
    articles_body:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?",
  },
  {
    articles_title: "Apa itu stellar",
    like: 20,
    dislike: 10,
    level: 2,
    date: timestamp,
    articles_body:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?",
  },
  {
    articles_title: "Apa itu bitcoin",
    like: 20,
    dislike: 10,
    level: 1,
    date: timestamp,
    articles_body:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum provident libero hic in mollitia placeat, totam vero nam! Velit fuga laudantium sed iusto ea sint ab ducimus ad voluptates perferendis?",
  },
];

const addMultipleDataToFirestore = async (dataList) => {
  try {
    const batch = writeBatch(db);

    dataList.forEach((data) => {
      const docRef = doc(collection(db, "Articles"));

      batch.set(docRef, data);
      console.log(data);
    });

    await batch.commit();

    console.log("Data berhasil ditambahkan ke Firestore");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

export const testTing = () => {
  useEffect(() => {
    addMultipleDataToFirestore(DataArtikel);
  }, []);
};
