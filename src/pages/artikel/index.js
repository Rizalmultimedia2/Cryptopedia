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

function artikel() {
  // testTing();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, [filter]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col container container-x md:gap-[30px] gap-[5px] mt-[30px]">
        <div className="space-y-[10px]">
          <p className="font-bold text-h2">Artikel Terbaru</p>
          <div className="flex md:justify-between flex-wrap items-center gap-5">
            <div className="w-[400px]">
              <Searchbar placeholder="Cari artikel" />
            </div>
            <div className="flex flex-row items-center gap-5">
              <p>level</p>
              <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-visible">
                <SelectLevel style="level" filter={handleFilter} />
              </ul>
            </div>
          </div>
        </div>
        {/* {isLoading && <Loading />} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16  md:gap-x-5 gap-y-[30px]">
          {data.map((item, index) => (
            <Artikel
              key={index}
              body={item.articles_body}
              title={item.articles_title}
              level={item.level}
              date={item.date}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(artikel);
