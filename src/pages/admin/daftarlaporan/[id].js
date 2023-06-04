import { FiChevronLeft } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { getAllDataFromFirestore } from "../../api/getData";
import Link from "next/link";
import AdminHeader from "@/components/Header/AdminHeader";
import { db } from "../../../../firebaseConfig";
import DataKomentar from "@/components/Komentar/DataKomentar";
import DeleteModal from "@/components/Modal/DeleteModal";

function DetailLaporan() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataList, setDataList] = useState([]);
  const getKategori = (kategori) => {
    switch (kategori) {
      case 0:
        return "Semua";
      case 1:
        return "Tren";
      case 2:
        return "Teknikal & Fundamental";
      case 3:
        return "General";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentRef = doc(db, "Sharing", id);
        const getData = await getDoc(documentRef);
        setData(getData.data());

        const q = query(
          collection(db, "report"),
          where("sharing_id", "==", id)
        );
        const getQuery = await getAllDataFromFirestore(q);
        setDataList(getQuery);
        const dataUser = getQuery.length;
        // await Promise.all(
        //   getQuery.map(async (item) => {
        //     const userRef = doc(db, "Users", item.user_id);
        //     const snapshot = await getDoc(userRef);
        //     if (snapshot.exists()) {
        //       const userData = snapshot.data();
        //       dataUser.push({ ...item, user: userData });
        //     }
        //   })
        // );

        // console.log("variabel datauser", dataUser);
        setDataUser(dataUser);
      } catch (error) {
        console.log("erronya adalah", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="flex container container-x flex-col min-h-[700px] mt-[30px] gap-6">
        <Link href="/admin/daftarlaporan">
          <FiChevronLeft className="inline" />
          <span>Kembali</span>
        </Link>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-6 flex-col gap-4">
            <div className="sharing-card w-full">
              <div className="flex flex-col gap-[5px]">
                <div className="text-h5 flex-center-between">
                  <div>{data.sharing_title}</div>
                </div>
                <div className="flex-center-between">
                  <span className="text-p3"></span>
                </div>
              </div>
              <div className="">{data.sharing_body}</div>
              <div className="flex flex-col gap-3">
                <div className="flex-center rounded-md text-p3 text-black py-1 px-4 w-fit bg-primary-4 font-bold">
                  {getKategori(data.category)}
                </div>
                <div className="flex-center-between text-p2">
                  <span className="text-black">#{data.tags}</span>
                </div>
              </div>
            </div>
            <h5 className="text-h5">Detail Laporan</h5>
            <div className="flex flex-col gap-4 ">
              {dataList.map((item, index) => (
                <DataKomentar
                  key={index}
                  comment={item.reason}
                  user_id={item.user_id}
                  post_id={item.post_id}
                  date={item.date}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex items-center flex-col gap-3">
            <div className="text-p1">Jumlah Laporan</div>
            <div className="text-h4">{dataUser}</div>
            <DeleteModal
              title="Hapus Diskusi ?"
              button={1}
              post_id={id}
              nameTable="report"
              nama="Forum"
            />
          </div>
        </div>
      </div>
      <Footer admin={1} />
    </>
  );
}

export default DetailLaporan;
