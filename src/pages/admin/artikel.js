import Artikel from "@/components/Artikel/Artikel";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import SelectLevel from "@/components/Select/SelectLevel";
import ArtikelModal from "@/components/Modal/ArtikelModal";
import AdminHeader from "@/components/Header/AdminHeader";
import withProtectedAdmin from "@/hoc/withProtectedAdmin";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { getAllDataFromFirestore } from "../api/getData";
import { db } from "../../../firebaseConfig";
import Loading from "@/components/Loading";
import { format } from "date-fns";
import Image from "next/image";

function ArtikelAdmin() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
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
            collection(db, "Articles"),
            where("level", "==", filter)
          );
          dataQuery = q;
        } else {
          const q = query(collection(db, "Articles"), limit(100));
          dataQuery = q;
        }

        const dataList = await getAllDataFromFirestore(dataQuery);
        const titles = dataList.map((data) => data.articles_title);
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
        const q = query(collection(db, "Articles"), limit(100));
        const dataList = await getAllDataFromFirestore(q);
        setData(dataList);
      } else {
        const dataList = [];
        const filterBySearch = [];
        for (const item of getTitle) {
          if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
            const q = query(
              collection(db, "Articles"),
              where("articles_title", "==", item)
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
      <AdminHeader />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <ArtikelModal
            name="Tambah artikel"
            title="Tambah Artikel Baru"
            icon={1}
          />
          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar
                placeholder="Cari artikel"
                onChange={(e) => setSearchQuery(e.target.value)}
                searchQuery={searchQuery}
                handleSearchClick={handleSearchClick}
              />
            </div>
            <div className="flex flex-row items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row text-h6 gap-3 rounded-lg w-fit overflow-visible">
                <SelectLevel style="level" filter={handleFilter} />
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px] z-0">
          {/* {isLoading && <Loading />} */}
          {data && data.length ? (
            data.map((item, index) => (
              <Artikel
                key={index}
                body={item.articles_body}
                title={item.articles_title}
                level={item.level}
                date={item.date}
                id={item.id}
                admin={1}
                image_url={item.image_url}
              />
            ))
          ) : (
            <div className="flex-center flex-col col-span-3 min-h-[400px]">
              <Image
                src="/empty_state/no_search.svg"
                width={450}
                height={400}
                alt="no-bookmark"
                className="my-1 mt-4"
              />
              <p className="text-p1">Tidak ada hasil pencarian</p>
            </div>
          )}
        </div>
      </div>
      <Footer admin={1} />
    </>
  );
}

export default withProtectedAdmin(ArtikelAdmin);
