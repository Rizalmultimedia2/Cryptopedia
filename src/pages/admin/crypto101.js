import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Banner from "@/components/Banner";
import SelectLevel from "@/components/Select/SelectLevel";
import MateriModal from "@/components/Modal/MateriModal";
import withProtectedAdmin from "@/hoc/withProtectedAdmin";
import AdminHeader from "@/components/Header/AdminHeader";
import { db } from "../../../firebaseConfig";
import { collection, limit, orderBy, query, where } from "firebase/firestore";
import Loading from "@/components/Loading";
import { getAllDataFromFirestore } from "../api/getData";

function MateriAdmin() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [atvisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let dataQuery;
      if (filter) {
        const q = query(
          collection(db, "Starting"),
          where("level", "==", filter)
        );
        dataQuery = q;
      } else {
        const q = query(
          collection(db, "Starting"),
          orderBy("starting_title", "asc"),
          limit(100)
        );
        dataQuery = q;
      }

      const dataList = await getAllDataFromFirestore(dataQuery);
      setLoading(false);
      setData(dataList);
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const [idStarting, setidStarting] = useState({
    stitle: "",
    slevel: "",
    sbody: "",
    sid: "",
  });

  return (
    <>
      <AdminHeader />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="text-h3">Crypto 101</h3>
            <MateriModal
              name="Buat Materi"
              icon={1}
              button={1}
              title="Buat Materi Baru"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" filter={handleFilter} />
            </ul>
            <div>
              <Searchbar placeholder="Cari Materi" />
            </div>
            <div className="flex flex-col gap-5 lg:max-h-screen max-h-[300px] overflow-y-scroll overflow-x-visible w-full p-2">
              {isLoading && <Loading />}
              {data.map((item, index) => (
                <CryptoMateri
                  key={index}
                  title={item.starting_title}
                  level={item.level}
                  body={item.starting_body}
                  id={item.id}
                  admin={1}
                  visible={atvisible}
                  setVisible={setVisible}
                  setId={setidStarting}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtectedAdmin(MateriAdmin);
