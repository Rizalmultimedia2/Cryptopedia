import Artikel from "@/components/Artikel/Artikel";
import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import SelectLevel from "@/components/Select/SelectLevel";
import { getAllDataFromFirestore } from "../api/getData";
import withProtected from "@/hoc/withProtected";
import { collection, limit, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loading from "@/components/Loading";
import parse from "html-react-parser";

function IndexArtikel() {
  // testTing();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [body, setBody] = useState("");

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
        setData(dataList);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  // useEffect(() => {
  //   const handleSearch = async () => {
  //     try {
  //       let dataQuery;
  //       if (searchQuery) {
  //         const q = query(
  //           collection(db, "Articles"),
  //           where("articles_title", "==", searchQuery)
  //         );
  //         console.log("search query atas", searchQuery);
  //         dataQuery = q;
  //       } else {
  //         const q = query(collection(db, "Articles"), limit(100));
  //         dataQuery = q;
  //       }
  //       const dataList = await getAllDataFromFirestore(dataQuery);
  //       setData(dataList);
  //     } catch (error) {
  //       console.error("Error searching data:", error);
  //     }
  //   };

  //   handleSearch();
  // }, [searchQuery]);

  console.log("search query", searchQuery);
  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <p className="font-bold text-h2">Artikel Terbaru</p>
          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar
                placeholder="Cari artikel"
                onChange={(e) => setSearchQuery(e.target.value)}
                searchQuery={searchQuery}
              />
            </div>
            <div className="flex flex-row flex-wrap items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row flex-wrap gap-2 text-h6 rounded-lg w-fit overflow-visible">
                <SelectLevel style="level" filter={handleFilter} />
              </ul>
            </div>
          </div>
        </div>
        {isLoading && <Loading />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px]">
          {data.map((item, index) => (
            <Artikel
              key={index}
              body={item.articles_body}
              title={item.articles_title}
              level={item.level}
              date={item.date}
              id={item.id}
              image_url={item.image_url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(IndexArtikel);
