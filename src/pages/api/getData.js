import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { format } from "date-fns";
import { useState } from "react";
import { db } from "../../../firebaseConfig";

// Fungsi untuk mengambil semua data dari koleksi Firestore
export const getAllDataFromFirestore = async (q) => {
  try {
    const querySnapshot = await getDocs(q);

    const dataList = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const convertedDate = data.date.toDate();
      const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");

      // Menambahkan data ke dalam array dataList
      dataList.push({
        id: doc.id,
        ...data,
        date: formattedDate,
      });
    });

    // // Menampilkan data
    console.log("Data dari Firestore:", dataList);
    return dataList;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

export const getOneDataFromFirestore = async (table, id) => {
  try {
    const docSnap = await getDoc(doc(db, table, id));
    console.log("Table ", table, id);

    if (docSnap.exists()) {
      const data = docSnap.data();

      console.log("Data tunggal dari Firestore:", data);
      return data;
    } else {
      console.log("Document tidak ditemukan!");
      return null;
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return null;
  }
};

export const getOneDataWithFilter = async (q) => {
  try {
    const docSnap = await getDocs(q);

    if (!docSnap.empty) {
      const user = docSnap.docs[0].data();
      console.log("Data pengguna:", user);
      return user;
    } else {
      console.log("Pengguna tidak ditemukan!");
      return null;
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return null;
  }
};
