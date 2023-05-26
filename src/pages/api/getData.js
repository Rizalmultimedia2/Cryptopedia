import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { format } from "date-fns";

// Fungsi untuk mengambil semua data dari koleksi Firestore
export const getAllDataFromFirestore = async (q) => {
  try {
    // const q = query(
    //   collection(db, getData),
    //   where(field, "==", filter),
    //   limit(num)
    // );
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
