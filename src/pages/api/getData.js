import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

// Fungsi untuk mengambil semua data dari koleksi Firestore
export const getAllDataFromFirestore = async (getData) => {
  try {
    const querySnapshot = await getDocs(collection(db, getData));

    const dataList = [];
    querySnapshot.forEach((doc) => {
      // Menambahkan data ke dalam array dataList
      dataList.push({ id: doc.id, ...doc.data() });
    });

    // // Menampilkan data
    // console.log("Data dari Firestore:", dataList);
    return dataList;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};
