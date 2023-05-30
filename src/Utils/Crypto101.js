import { collection, writeBatch, addDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

export const DataMateri = [
  {
    starting_title: "Annual Percentage Yield (APY)",
    level: 1,
    starting_body:
      "Annual Percentage Yield atau APY adalah tingkat pengembalian atas investasi atau bunga yang diperoleh investor dalam periode waktu tertentu dengan mempertimbangkan bunga majemuk alias compound interest.",
  },
  {
    starting_title: "All-Time Low (ATL)",
    level: 1,
    starting_body:
      "All-Time Low (ATL) merupakan istilah yang mengacu pada titik harga terendah yang disentuh oleh sebuah aset sejak pertama kali listing.",
  },
  {
    starting_title: "All-Time High (ATH)",
    level: 1,
    starting_body:
      "All-Time High (ATH) adalah istilah yang mengacu pada titik harga tertinggi yang disentuh oleh sebuah aset sejak pertama kali listing.",
  },
  {
    starting_title: "BscScan",
    level: 1,
    starting_body:
      "BscScan adalah block explorer khusus BNB Chain yang digunakan untuk mencari alamat dan transaksi.",
  },
  {
    starting_title: "Consensus Mechanism",
    level: 3,
    starting_body:
      "Consensus mechanism adalah seperangkat aturan dan prosedur yang memungkinkan jaringan komputer untuk mencapai kesepakatan tentang kevalidan transaksi.",
  },
  {
    starting_title: "Dusting Attack",
    level: 2,
    starting_body:
      "Dusting attack adalah metode penyerangan dengan cara mengirimkan sejumlah aset crypto dengan nominal yang kecil ke alamat dompet secara acak",
  },
  {
    starting_title: "Decentralized Exchange (DEX)",
    level: 1,
    starting_body:
      "Decentralized exchange (DEX) atau penukaran terdesentralisasi adalah platform pertukaran aset kripto yang sifatnya peer-to-peer sehingga memungkinkan pengguna untuk menukarkan asetnya tanpa perlu perantara.",
  },
  {
    starting_title: "All-Time High (ATH)",
    level: 1,
    starting_body:
      "All-Time High (ATH) adalah istilah yang mengacu pada titik harga tertinggi yang disentuh oleh sebuah aset sejak pertama kali listing.",
  },
  {
    starting_title: "Exit Liquidity",
    level: 2,
    starting_body:
      "Exit liquidity adalah kondisi di mana investor yang membeli di harga yang tinggi menjadi likuiditas bagi para investor awal yang menjual aset yang sudah dimiliki",
  },
  {
    starting_title: "Ethereum Virtual Machine (EVM)",
    level: 1,
    starting_body:
      "Ethereum Virtual Machine atau EVM adalah sebuah program yang bertugas menjalankan semua smart contract pada jaringan Ethereum.",
  },
  {
    starting_title: "GameFi",
    level: 1,
    starting_body:
      "GameFi adalah perpaduan antara game (permainan) dan finance (keuangan) dalam bentuk Decentralized Apps (dapps).",
  },
  {
    starting_title: "Index",
    level: 2,
    starting_body:
      "Instrumen keuangan yang digunakan untuk mengukur nilai harga suatu aset atau pasar.",
  },
  {
    starting_title: "Know Your Customer (KYC)",
    level: 3,
    starting_body:
      "Prosedur standar dalam industri keuangan bagi perusahaan untuk mengidentifikasi pengguna mereka.",
  },
  {
    starting_title: "Ledger",
    level: 2,
    starting_body:
      "Buku fisik atau file komputer digital untuk mencatat semua transaksi keuangan.",
  },
];

const addMultipleDataToFirestore = async (dataList) => {
  try {
    const batch = writeBatch(db);

    dataList.forEach((data) => {
      const docRef = doc(collection(db, "Starting"));

      batch.set(docRef, data);
      console.log(data);
    });

    await batch.commit();

    console.log("Data berhasil ditambahkan ke Firestore");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

// export const testTing = () => {
//   useEffect(() => {
//     addMultipleDataToFirestore(DataMateri);
//   }, []);
// };
