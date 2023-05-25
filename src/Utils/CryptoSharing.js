import { Timestamp } from "firebase/firestore";
import { collection, writeBatch, addDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const dateString = "01/20/2023 23:31:30";
const dateObject = new Date(dateString);
const timestamp = Timestamp.fromDate(dateObject);

export const DataForum = [
  {
    sharing_title: "Altcoin apa yang akan terbang",
    // username: "Rizal Herliansyah Hidayat",
    // waktu: "1 jam yang lalu",
    date: timestamp,
    sharing_body:
      "Pada nanti tahun 2025, kayaknya crypto akan mengalami fase bullrun nya karena adanya halving bitcoin, kira kira altcoin apa yang akan terbang tinggi pada saat crypto bullrun?",
    category: 1,
    tags: ["#USDT", "#BUSD"],
    like: 10,
    dislike: 5,
    total_comments: 2,
    total_bookmark: 3,
  },
  {
    sharing_title:
      "Komite Kongres AS Mengecam Tindakan Keras Gensler Pada Bisnis Kripto",
    // username: "Ramdan Purnama",
    // waktu: "2 jam yang lalu",
    date: timestamp,
    sharing_body:
      "Sebagai respons, Gensler mengatakan bahwa, “Saya telah berkecimpung di [bidang] keuangan selama lebih dari 40 tahun dengan satu atau lain cara, dan saya belum pernah melihat bidang yang sangat tidak patuh dengan hukum undang-undang yang ditulis oleh Kongres dan ditegaskan berulang kali oleh pengadilan.”",
    category: 2,
    tags: ["#USDT", "#BUSD"],
    like: 9,
    dislike: 2,
    total_comments: 1,
    total_bookmark: 7,
  },
  {
    sharing_title:
      "Bola Oranye A16z yang Sempat Heboh di Twitter Ternyata Merupakan Rollup L2",
    // username: "Ramdan Purnama",
    // waktu: "2 jam yang lalu",
    date: timestamp,
    sharing_body:
      "OP Stack merujuk pada kumpulan perangkat lunak yang menggerakkan solusi lapisan 2 Ethereum, Optimism. Selain manfaat lain yang disediakan, perangkat lunak ini membantu menyederhanakan proses pembuatan blockchain lapisan 2.",
    category: 2,
    tags: ["#USDT", "#BUSD"],
    like: 9,
    dislike: 2,
    total_comments: 1,
    total_bookmark: 7,
  },
  {
    sharing_title:
      "Blur Meluncurkan Protokol Pinjaman Perpetual NFT untuk Meningkatkan Likuiditas NFT",
    // username: "Rian Maulana",
    // waktu: "4 jam yang lalu",
    date: timestamp,
    sharing_body:
      " Regulator tersebut telah menyetujui untuk memperbolehkan penyedia aset virtual yang telah berlisensi melayani investor ritel, asalkan operator melakukan penilaian pemahaman terhadap risiko yang terlibat, sesuai dengan laporan mengenai konsultasi kebijakan yang dirilis pada hari Selasa kemarin. SFC membuka rekomendasi kebijakan awalnya untuk umpan balik publik pada bulan Februari.",
    category: 3,
    tags: ["#USDT", "#BUSD"],
    like: 100,
    dislike: 2,
    total_comments: 1,
    total_bookmark: 9,
  },
  {
    sharing_title: "Pengguna Ledger Harap Tenang!",
    // // username: "Wulan",
    // waktu: "6 jam yang lalu",
    date: timestamp,
    sharing_body:
      "Pada hari Selasa, Ledger mengumumkan Ledger Recover, sebuah layanan pemulihan kunci berbasis ID yang menyediakan cadangan untuk Frasa Rahasia (Seed Phrase)—yaitu cadangan dari semua kunci privat yang disimpan dalam sebuah dompet kripto Setelah mendengar tentang Ledger Recover, banyak penggemar kripto yang mengkritik Ledger di media sosial. Misinformasi tentang layanan ini dengan cepat menyebar, dan beberapa orang yang kurang bertanggung jawab menyuruh orang untuk langsung tarik semua aset kripto mereka segera.",
    category: 4,
    tags: ["#USDT", "#BUSD"],
    like: 23,
    dislike: 1,
    total_comments: 8,
    total_bookmark: 5,
  },
];

const addMultipleDataToFirestore = async (dataList) => {
  try {
    const batch = writeBatch(db);

    // Mengiterasi dataList untuk menambahkan setiap data ke batch
    dataList.forEach((data) => {
      const docRef = doc(collection(db, "Sharing"));

      // Menambahkan operasi penulisan ke batch
      batch.set(docRef, data);
      console.log(data);
    });

    // Menjalankan batch penulisan
    await batch.commit();

    console.log("Data berhasil ditambahkan ke Firestore");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

export const testTing = () => {
  useEffect(() => {
    addMultipleDataToFirestore(DataForum);
  }, []);
};
