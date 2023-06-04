import Artikel from "@/components/Artikel/Artikel";
import CryptoSharing from "@/components/Crypto Sharing/CryptoSharingCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { GoKebabHorizontal } from "react-icons/go";
import React, { useEffect, useState } from "react";
import withProtected from "@/hoc/withProtected";
import { getAllDataFromFirestore } from "./api/getData";
import { collection, doc, getDoc, limit, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useUser } from "@/context/user";

function Beranda() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [artikel, setArtikel] = useState([]);

  const user = useUser();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const q = query(collection(db, "Sharing"));
      const dataList = await getAllDataFromFirestore(q);
      setData(dataList);

      const qArtikel = query(collection(db, "Articles"), limit(5));
      const dataListArtikel = await getAllDataFromFirestore(qArtikel);
      setArtikel(dataListArtikel);

      const getUser = doc(db, "Users", user.uid);
      const getData = await getDoc(getUser);
      setCurrentUser(getData.data());
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
            <Link href="/crypto101" className="text-primary-1 font-semibold ">
              Klik disini
            </Link>
          </div>
          <div className="flex flex-row gap-4 w-full h-[50px]">
            <Image
              src={`/avatar/${currentUser.avatar_id}.svg`}
              height={50}
              width={50}
              className="object-cover"
              alt="avatars"
            />
            <Link
              href="/cryptosharing"
              className="button-normal flex-center-between gap-3 w-[300px]"
            >
              <span>Klik untuk membuat diskusi</span>
              <GoKebabHorizontal />
            </Link>
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
                  likes={item.likes}
                  dislikes={item.dislikes}
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
                  image_url={item.image_url}
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

export default withProtected(Beranda);
