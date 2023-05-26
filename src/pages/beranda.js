import Artikel from "@/components/Artikel/Artikel";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { GoKebabHorizontal } from "react-icons/go";
import React, { useEffect, useState } from "react";
import withProtected from "@/hoc/withProtected";
import { getAllDataFromFirestore } from "./api/getData";
import { collection, limit, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Loading from "@/components/Loading";

function beranda() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const q = query(collection(db, "Sharing"));
      const dataList = await getAllDataFromFirestore(q);
      setData(dataList);
    };
    fetchData();
    setLoading(false);
  }, []);

  const [artikel, setArtikel] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const q = query(collection(db, "Articles"));
      const dataList = await getAllDataFromFirestore(q);
      setArtikel(dataList);
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <div className="container container-x flex flex-col gap-5 my-6">
        <div className="flex flex-col gap-6">
          <div className="text-p2">
            <p className="text-h3 text-black max-w-[600px]">
              Belajar dan berdiskusi Cryptocurrency dengan mudah
            </p>
            Pemula di Crypto?{" "}
            <a href="/crypto101" className="text-primary-1 font-semibold ">
              Klik disini
            </a>
          </div>
          <div className="flex flex-row gap-4 w-full h-[50px]">
            <Image
              src="/image/artikel.png"
              height={50}
              width={50}
              className="rounded-full object-cover"
              alt="avatars"
            />
            <a
              href="/cryptosharing"
              className="button-normal flex-center-between gap-3 w-[300px]"
            >
              <span>Klik untuk membuat diskusi</span>
              <GoKebabHorizontal />
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[60px] gap-[30px]">
          <div className="col-span-2 flex flex-col gap-5">
            <span className="text-h5">Forum Terbaru</span>
            {isLoading && <Loading />}
            <div className="flex flex-col gap-5">
              {data.map((item, index) => (
                <CryptoSharing
                  title={item.sharing_title}
                  username="Rizal Herliansyah"
                  waktu="nanti"
                  tanggal={item.date}
                  body={item.sharing_body}
                  kategori={item.category}
                  tag={item.tags}
                  like={item.like}
                  dislike={item.dislike}
                  comment={item.total_comments}
                  id={item.id}
                  line="yes"
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 col-span-full w-full flex flex-col gap-5">
            <span className="text-h5">Artikel Terbaru</span>
            {isLoading && <Loading />}
            <div className="flex flex-col gap-5">
              {artikel.map((item, index) => (
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withProtected(beranda);
