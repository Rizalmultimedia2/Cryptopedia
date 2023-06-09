import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import SelectLevel from "@/components/Select/SelectLevel";
import MateriModal from "@/components/Modal/MateriModal";
import withProtectedAdmin from "@/hoc/withProtectedAdmin";
import AdminHeader from "@/components/Header/AdminHeader";
import { db } from "../../../firebaseConfig";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Loading from "@/components/Loading";
import { getAllDataFromFirestore } from "../api/getData";
import Image from "next/image";
import { format } from "date-fns";
import Head from "next/head";

function MateriAdmin() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [atvisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);
  const [getTitle, setTitle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        const titles = dataList.map((data) => data.starting_title);
        setTitle(titles);
        setLoading(false);
        setData(dataList);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const handleSearchClick = async () => {
    try {
      if (searchQuery == "") {
        const q = query(
          collection(db, "Starting"),
          orderBy("starting_title", "asc"),
          limit(100)
        );
        const dataList = await getAllDataFromFirestore(q);
        setData(dataList);
      } else {
        const dataList = [];
        const filterBySearch = [];
        for (const item of getTitle) {
          if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
            const q = query(
              collection(db, "Starting"),
              where("starting_title", "==", item)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              const convertedDate = data.date.toDate();
              const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");

              dataList.push({
                id: doc.id,
                ...data,
                date: formattedDate,
              });
            });
            filterBySearch.push(item);
          }
        }
        setData(dataList);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Cryptopedia | Crypto 101</title>
        <meta name="description" content="" />
        <link rel="icon" href="/image/Logo.svg" />
      </Head>
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
              <Searchbar
                placeholder="Cari Materi"
                onChange={(e) => setSearchQuery(e.target.value)}
                searchQuery={searchQuery}
                handleSearchClick={handleSearchClick}
              />
            </div>
            <div className="flex flex-col gap-5 lg:max-h-screen max-h-[300px] overflow-y-scroll overflow-x-visible w-full p-2">
              {isLoading && <Loading />}
              {data && data.length ? (
                data.map((item, index) => (
                  <CryptoMateri
                    key={index}
                    title={item.starting_title}
                    level={item.level}
                    body={item.starting_body}
                    id={item.id}
                    admin={1}
                    visible={atvisible}
                    setVisible={setVisible}
                  />
                ))
              ) : (
                <div className="flex-center flex-col col-span-3 min-">
                  <Image
                    src="/empty_state/no_search.svg"
                    width={350}
                    height={200}
                    alt="no-bookmark"
                    className="my-1 mt-4"
                  />
                  <p className="text-p21">Tidak ada hasil pencarian</p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
          </div>
        </div>
      </div>
      <Footer admin={1} />
    </>
  );
}

export default withProtectedAdmin(MateriAdmin);
