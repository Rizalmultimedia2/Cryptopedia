import Footer from "@/components/Footer";
import AdminHeader from "@/components/Header/AdminHeader";
import Thead from "@/components/Table/Thead";
import Titems from "@/components/Table/Titems";
import withProtectedAdmin from "@/hoc/withProtectedAdmin";
import { getAllDataFromFirestore } from "@/pages/api/getData";
import { collection, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import Head from "next/head";

function daftarlaporan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "report"));
        const getData = await getAllDataFromFirestore(q);

        const idCount = {};

        getData.forEach((doc) => {
          const id = doc.sharing_id;
          if (!idCount[id]) {
            idCount[id] = {
              count: 1,
              date: doc.date,
            };
          } else {
            idCount[id].count += 1;
          }
        });

        const idData = [];

        for (const id in idCount) {
          idData.push({
            sharing_id: id,
            date: idCount[id].date,
            total: idCount[id].count,
          });
        }

        setData(idData);
      } catch (error) {
        console.log("error", error);
      }
    };

    // console.log("Data per ID:");
    // console.log(data);
    fetchData();
  }, []);

  // console.log("isi data", data);

  return (
    <>
      <Head>
        <title>Cryptopedia | Daftar laporan</title>
        <meta name="description" content="" />
        <link rel="icon" href="/image/Logo.svg" />
      </Head>
      <AdminHeader />
      <div className="flex flex-col container container-x min-h-[700px] md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="flex-center flex-col gap-5">
          <h3 className="text-h3">Daftar Laporan Crypto Sharing</h3>
          <div className="flex overflow-x-auto max-w-[1200px] w-full rounded-lg">
            <table className="w-full text-sm text-black text-center">
              <thead className="text-p3  bg-primary-1 ">
                <tr>
                  <Thead
                    head={[
                      "No",
                      "Id Sharing",
                      "Terakhir dilaporkan",
                      "Jumlah Laporan",
                      "Aksi",
                    ]}
                  />
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <Titems
                    key={index}
                    num={index + 1}
                    post_id={item.sharing_id}
                    date={item.date}
                    total={item.total}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer admin={1} />
    </>
  );
}

export default withProtectedAdmin(daftarlaporan);
