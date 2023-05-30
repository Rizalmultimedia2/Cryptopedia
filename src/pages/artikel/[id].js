import { FiChevronLeft, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import withProtected from "@/hoc/withProtected";
import { collection, doc, getDoc, limit, query } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import { format } from "date-fns";
import parse from "html-react-parser";
import { getAllDataFromFirestore } from "../api/getData";
import Artikel from "@/components/Artikel/Artikel";
import Loading from "@/components/Loading";

function DetailArtikel() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [body, setBody] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Pemula";
      case 2:
        return "Menengah";
      case 3:
        return "Ahli";
    }
  };

  const getColor = (level) => {
    if (level == 1) {
      return "#29BF9F";
    } else if (level == 2) {
      return "#FACA21";
    } else if (level == 3) {
      return "#E96E70";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Articles", id);
      const docSnap = await getDoc(docRef);
      setLoading(true);

      if (docSnap.exists()) {
        const convertedDate = docSnap.data().date.toDate();
        const formattedDate = format(convertedDate, "dd/MM/yyyy HH:mm");
        const parsedData = parse(docSnap.data().articles_body);
        setData(docSnap.data());
        setDate(formattedDate);
        setBody(parsedData);
      } else {
        console.log("Document not found!");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const [articles, seArticles] = useState([]);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const q = query(collection(db, "Articles"), limit(4));
      const dataList = await getAllDataFromFirestore(q);
      seArticles(dataList);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {console.log("datanya ", data)}
      {console.log("datanya ", articles)} */}
      <Header />
      <div className="grid lg:grid-cols-3 container gap-[50px] container-x mt-[30px]">
        <div className="col-span-2 flex flex-col gap-[20px]">
          <a href="/artikel">
            <FiChevronLeft className="inline" />
            <span>Kembali</span>
          </a>
          <div>
            <span
              className="level"
              style={{ background: getColor(data.level) }}
            >
              {" "}
              {getLevel(data.level)}
            </span>
            {isLoading && <Loading />}
            {/* Kalau gambar pakai api, simpan disini */}
            <p className="text-h2">{data.articles_title}</p>
            <span className="text-p2">
              {date}
              <span className="text-primary-1"> Rizal Herliansyah Hidayat</span>
            </span>
          </div>
          <div className="relative h-[380px]">
            <Image
              src="/image/Artikel.png"
              fill
              className="object-cover rounded-xl"
              alt="Cover"
            />
          </div>
          <div className="flex flex-col gap-5">{body}</div>
          <div className="py-5 px-5 bg-[#CDEDE6]/25 w-fit text-p1 flex flex-row items-center gap-3">
            <span className="font-semibold">
              Apakah kamu suka dengan artikel ini?{" "}
            </span>
            <FiThumbsDown className="text-red-1 cursor-pointer" />
            <FiThumbsUp className="text-primary-1 cursor-pointer" />
          </div>
        </div>
        <div className="col-span-1 flex lg:flex-col flex-wrap gap-5">
          <span className="text-h4">Artikel Lainnya</span>
          {isLoading && <Loading />}

          {articles.map((item, index) => (
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

export default withProtected(DetailArtikel);
