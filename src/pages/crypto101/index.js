import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import CryptoMateri from "@/components/Crypto101/CryptoMateriCard";
import MyBookmark from "@/components/Bookmark/MyBookmark";
import Banner from "@/components/Banner";
import SelectLevel from "@/components/Select/SelectLevel";
import { getAllDataFromFirestore } from "../api/getData";
import withProtected from "@/hoc/withProtected";

function index() {
  const [data, setData] = useState([]);
  const getData = "Starting";

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await getAllDataFromFirestore(getData);
      setData(dataList);
    };
    fetchData();
  }, []);
  // console.log("apakah masuk datanya", data);
  return (
    <>
      <Header />
      <div className="flex container container-x flex-col mt-[30px] gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-h3">Crypto 101</h3>
          <div className="flex justify-between">
            <span className="text-p1">
              Tempat belajar cryptocurrency untuk pemula
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-[30px]">
          <div className="flex lg:col-span-5 flex-col gap-5">
            <ul className="flex flex-row text-h6 rounded-lg w-fit overflow-hidden">
              <SelectLevel style="category" />
            </ul>
            <div>
              <Searchbar placeholder="Cari Materi" />
            </div>
            <div className="flex flex-col gap-5 max-h-screen overflow-y-scroll overflow-x-visible w-full p-2">
              {data.map((item, index) => (
                <CryptoMateri
                  key={index}
                  title={item.starting_title}
                  level={item.level}
                  body={item.starting_body}
                  id={item.id}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <MyBookmark />
            </div>
            <div>
              <Banner
                title="Sudah siap belajar crypto lebih lanjut?"
                body="Bergabung dalam diskusi untuk tingkatkan pemahamanmu didalam cryptocurrency"
                link="/cryptosharing"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(index);
